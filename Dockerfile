# Build multi-étapes du site aimakers.fr (Next.js, sortie standalone).
# Sert au déploiement auto-hébergé sur le VPS, derrière le Caddy partagé
# (/opt/ai-makers/infra/caddy). Vercel n'utilise pas ce fichier.
#
# Même schéma que apps/os/app/Dockerfile, à une différence près : ce site n'a
# aucune variable NEXT_PUBLIC_* à figer dans le bundle client au build, sauf
# l'ID Google Analytics. Les trois webhooks n8n sont lus côté serveur à
# l'exécution, donc ils passent par l'env du conteneur, pas par un ARG.

FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Bascule distDir sur ".next" (voir next.config.ts) : les COPY de l'étape runner
# visent des chemins figés, et ".next.nosync" est un artefact du poste local.
ENV CONTAINER_BUILD=1
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
# Next écoute sur toutes les interfaces : Caddy l'atteint par le réseau Docker,
# pas par la loopback du conteneur.
ENV HOSTNAME=0.0.0.0
ENV PORT=3000
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
