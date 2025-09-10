---
menus: "main" # don't change
title: "Wavpoint"
date: "2024-06-10"
summary: "Wavpoint is an on-chain platform for curated, tokenized minimixes. It tests new distribution mechanics: a minimix that mints 7,777+ times unlocks a limited-run vinyl; minters are allowlisted to mint a redeemable vinyl token. Minimixes are 10 or 40 minutes to match 7-inch/12-inch sides; the format is open.<br><br>I built a cross-platform monorepo (Next.js web, Expo mobile, shared UI via Solito) and a static landing page. An indexer aggregates Zora events via Viem for mint counts and vinyl gating; Privy handles wallet auth, and Supabase stores social metadata. Main challenges: using very new libraries with sparse docs and coping with decentralized infra limits (RPC variability, indexing).<br><br>Stack highlights: Turborepo, TypeScript, Next.js, Expo, Solito, NativeWind, Viem, Zora, Jotai, Privy, Supabase.<br><br>[view the repo](https://github.com/wavpoint/wavpoint-monorepo) or [view our hackathon submission](https://devfolio.co/projects/wavpoint-dbc8)"
backgroundColor: "#101010"
accentColor: "#FFFFFF"
---
{{< figure src="landing.png" title="Landing Page" caption="" width="1600" >}}
{{< figure src="mix.png" title="Minimix Page" caption="" width="1600" >}}
{{< figure src="mint.png" title="Mint a Minimix" caption="" width="1600" >}}