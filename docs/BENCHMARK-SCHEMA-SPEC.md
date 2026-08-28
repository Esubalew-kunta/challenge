# `benchmark_runs`, le schéma du Benchmark des Makers

Le schéma est **déjà appliqué** au projet Supabase `ai_makers_internal`
(`vncqaboiklsxyynbiuej`), en deux migrations :

| Migration | Contenu |
|---|---|
| `benchmark_runs_schema_and_rls` | la table, deux déclencheurs, deux vues, RLS |
| `benchmark_runs_pack_download` | la colonne `pack_downloaded_at` et son index |

Ce document existe parce que le dépôt ne versionne aucun `.sql` : sans lui, la
seule trace du schéma serait la console Supabase, et une relecture de PR ne
pourrait pas vérifier ce qui a été posé. Même rôle que
`APPLICANTS-SCHEMA-SPEC.md`.

---

## Ce que la base fait et que le navigateur ne peut pas faire

Trois valeurs sont calculées par des déclencheurs et **jamais** envoyées par le
client, parce que le client n'a aucun droit de lecture sur la table :

| Colonne | Pourquoi en base |
|---|---|
| `public_name` | Prénom plus initiale du nom. C'est la promesse faite à l'étape 01 de l'onboarding, et elle tient même si le front se trompe. Une valeur envoyée par le client est écrasée |
| `attempt` | Le nombre de sessions déjà enregistrées pour cette adresse, plus un. Insensible à la casse de l'e-mail |
| `is_best` | Vrai sur la meilleure session de cette adresse : score le plus haut, égalité tranchée par la durée la plus courte puis la soumission la plus ancienne. Recalculé pour toute l'adresse après chaque insertion, sinon l'ancienne meilleure resterait au classement à côté de la nouvelle |

## Ce que le schéma ne peut pas empêcher

Le test tourne dans le navigateur. Les contraintes `CHECK` arrêtent les valeurs
absurdes, pas un mensonge plausible : quelqu'un de déterminé peut poster un
parcours parfait sans avoir répondu à quoi que ce soit. Déplacer la correction
côté serveur est un autre chantier.

## RLS

RLS est **active, sans aucune politique**. Anon et authenticated ne lisent ni
n'écrivent rien sur la table. Toutes les écritures passent par
`/api/benchmark-run` avec la clé `service_role`, comme `claude_code_badges` et
`claude_code_leads`.

**Écart assumé avec la section 9 du PRD**, qui prévoyait une insertion anonyme.
Trois raisons : c'est le motif de toutes les autres tables du site, il n'existe
aucune clé anonyme dans ce code côté navigateur, et une politique d'insertion
publique sur une table qui alimente un classement public laisse un inconnu y
poster un 240. La lecture anonyme du classement, elle, existe bien, à travers
une vue qui n'expose ni e-mail, ni nom d'affichage, ni durée, ni date.

En pratique l'application n'utilise pas la vue : la route serveur fusionne le
classement elle-même, parce que le tri a besoin de la durée que la vue cache
volontairement. La vue reste le contrat de lecture publique documenté.

---

## Migration 1 — `benchmark_runs_schema_and_rls`

```sql
create table if not exists public.benchmark_runs (
  id               uuid primary key default gen_random_uuid(),
  run_code         text        not null check (run_code ~ '^[A-Z0-9]{4}$'),
  created_at       timestamptz not null default now(),

  display_name     text        not null check (length(btrim(display_name)) between 1 and 120),
  public_name      text        not null,
  email            text        not null check (position('@' in email) > 1 and length(email) <= 254),
  company          text        not null check (length(btrim(company)) between 1 and 160),

  track_id         text        not null check (track_id in ('growth','eng','ops','fin')),
  role             text        not null check (length(btrim(role)) between 1 and 120),

  final_tier       text        not null check (final_tier in ('beginner','intermediate','expert')),
  score            int         not null check (score between 0 and 240),
  correct_count    int         not null check (correct_count between 0 and 9),
  duration_seconds int         not null check (duration_seconds between 1 and 86400),
  round_results    jsonb       not null,

  attempt          int         not null default 1 check (attempt >= 1),
  is_best          boolean     not null default false,
  locale           text        not null default 'fr' check (locale in ('fr','en'))
);

create index if not exists benchmark_runs_email_idx
  on public.benchmark_runs (lower(email));
create index if not exists benchmark_runs_board_idx
  on public.benchmark_runs (score desc, duration_seconds asc, created_at asc)
  where is_best;
```

Déclencheur avant insertion : `attempt` et `public_name`.

```sql
create or replace function public.benchmark_runs_set_attempt()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  first_token text;
  last_token  text;
  tokens      text[];
begin
  select count(*) + 1 into new.attempt
    from public.benchmark_runs
   where lower(email) = lower(new.email);

  tokens := regexp_split_to_array(btrim(new.display_name), '\s+');
  first_token := tokens[1];
  last_token  := tokens[array_length(tokens, 1)];

  if array_length(tokens, 1) > 1 and length(last_token) > 0 then
    new.public_name := first_token || ' ' || upper(left(last_token, 1)) || '.';
  else
    new.public_name := first_token;
  end if;

  new.is_best := false;
  return new;
end;
$$;
```

Déclencheur après insertion : `is_best`, recalculé pour toute l'adresse.

```sql
create or replace function public.benchmark_runs_refresh_best()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  with ranked as (
    select id,
           row_number() over (
             order by score desc, duration_seconds asc, created_at asc
           ) as rn
      from public.benchmark_runs
     where lower(email) = lower(new.email)
  )
  update public.benchmark_runs b
     set is_best = (r.rn = 1)
    from ranked r
   where b.id = r.id
     and b.is_best is distinct from (r.rn = 1);

  return null;
end;
$$;

create trigger benchmark_runs_before_insert
  before insert on public.benchmark_runs
  for each row execute function public.benchmark_runs_set_attempt();

create trigger benchmark_runs_after_insert
  after insert on public.benchmark_runs
  for each row execute function public.benchmark_runs_refresh_best();
```

RLS et vues publiques.

```sql
alter table public.benchmark_runs enable row level security;
revoke all on public.benchmark_runs from anon, authenticated;

create or replace view public.benchmark_leaderboard as
  select row_number() over (
           order by score desc, duration_seconds asc, created_at asc
         )::int as rank,
         public_name, company, track_id, final_tier, score, attempt
    from public.benchmark_runs
   where is_best;

create or replace view public.benchmark_stats as
  select count(*)::int as total_runs,
         count(distinct lower(email))::int as total_people
    from public.benchmark_runs;

grant select on public.benchmark_leaderboard to anon, authenticated;
grant select on public.benchmark_stats to anon, authenticated;
```

`rank` va au-delà des six colonnes de la section 9 : sans lui, un client limité
à ces six colonnes ne peut pas reproduire le départage à la durée, donc le
compteur « vous êtes {rang}e » ne se calcule pas. `benchmark_stats` existe parce
que le compteur parle de **parcours** et non de personnes, et que le classement
en dédoublonne un par adresse.

## Migration 2 — `benchmark_runs_pack_download`

```sql
alter table public.benchmark_runs
  add column if not exists pack_downloaded_at timestamptz;

create index if not exists benchmark_runs_pack_idx
  on public.benchmark_runs (track_id)
  where pack_downloaded_at is not null;
```

Nul tant que personne n'a téléchargé. Le premier téléchargement l'horodate, les
suivants ne le déplacent pas : ce qui intéresse est de savoir si le pack a été
pris, pas combien de fois la même personne a cliqué.

---

## Variables d'environnement

Aucune nouvelle. La route réutilise `SUPABASE_URL` et
`SUPABASE_SERVICE_ROLE_KEY`, déjà nécessaires au challenge.

Une seule s'ajoute, et seulement pour un déploiement : tant qu'une chaîne
provisoire n'est pas validée, la construction de production refuse de compiler.
`BENCHMARK_ALLOW_DRAFT_STRINGS=1` lève ce refus. C'est délibéré : mettre en ligne
une mention de confidentialité que personne n'a relue doit être une décision
prise, pas un oubli.
