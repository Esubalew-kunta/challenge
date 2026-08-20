/**
 * Accès partagé à l'OS AI Makers — URL Supabase interne et clé anonyme.
 *
 * Un seul endroit : `capture-lead.ts` et `capture-application.ts` appellent
 * tous les deux `rest/v1/rpc/*` sur la même instance, avec la même clé anon
 * (jamais service_role — le site appelle des fonctions SECURITY DEFINER
 * dédiées, protégées chacune par leur propre secret d'ingestion ; si un
 * secret fuite, le pire scénario est une fausse ligne, pas un accès à la
 * base). Factorisé ici plutôt que dupliqué pour que les deux modules ne
 * puissent pas diverger sur l'hôte ou la clé.
 */

/**
 * URL interne de l'OS. Le conteneur du site et supabase-kong partagent le
 * réseau Docker `web`, donc l'appel ne sort jamais sur internet.
 *
 * Nom de conteneur explicite, jamais un nom de service nu : sur cette
 * machine un nom nu (« kong », « rest ») résout entre tenants.
 */
export const OS_URL = process.env.OS_SUPABASE_URL ?? "http://supabase-kong:8000";
export const OS_ANON = process.env.OS_SUPABASE_ANON_KEY;

/** L'app OS, joignable par nom de conteneur sur le réseau `web` partagé. */
export const OS_APP_URL = process.env.OS_APP_URL ?? "http://os-app:3000";
