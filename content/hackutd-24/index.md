---
menus: "main" # don't change
title: "HackUTD 2024"
date: "2024-11-16"
summary: "INFOGO is a retrieval‑augmented research assistant for equity analysis, built at HackUTD 2024. It crawls and ingests SEC filings, earnings transcripts, news, and market stats, indexes them, and answers natural‑language questions with citations while compiling a valuation snapshot. A baseline Net Current Asset Value (NCAV) model is adjusted up or down based on evidence extracted from the retrieved documents.<br><br>I led the AI and integration work: GPT‑4o for extraction/synthesis, text‑embedding‑3‑large for dense retrieval, and a MongoDB‑backed store exposed via a clean API to the web frontend. The main challenges were robust ingestion/cleaning and prompt/guardrail design. Next steps would have included user document uploads, markdown formatting, saved searches, and richer comparative charts.<br><br>Stack highlights: GPT‑4o, text‑embedding‑3‑large, RAG, MongoDB, Next.js, Langchain.<br><br>[view the repo](https://github.com/su-bonbon/HackUTD2024) or [view our hackathon submission](https://devpost.com/software/fill)"
backgroundColor: "#101010"
accentColor: "#FFFFFF"
---