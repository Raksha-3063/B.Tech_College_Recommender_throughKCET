# KCET College Recommendation System

## What This Is
A complete web application that helps KCET students find the best engineering colleges and branches in Karnataka based on their KCET rank, category, and preferred branches.

## Core Value
Accurate and clean college recommendation matching based on historical cutoff ranks, enabling students to make informed admission decisions.

## Requirements

### Validated
(None yet — ship to validate)

### Active
- [ ] **DATA-01**: Seed a mock dataset with 50-100 rows of KCET 2025 cutoff data.
- [ ] **EXPL-01**: Perform exploratory data analysis and cleaning using Pandas and Jupyter Notebooks.
- [ ] **REC-01**: Build a rule-based rank recommendation algorithm.
- [ ] **ML-01**: Train admission probability ML models based on rank, category, branch, and college.
- [ ] **API-01**: Develop FastAPI backend with SQLite database to serve recommendations.
- [ ] **UI-01**: Design a premium responsive Next.js frontend for ranks search and listings.
- [ ] **DEP-01**: Deploy frontend to Vercel, backend to Railway, and database to Supabase.

### Out of Scope
- Real-time college news feed — Defer to future versions.
- Non-engineering branch recommendations (e.g., Medical, Dental) — Out of scope for v1.

## Context
- The user is beginning the project from scratch.
- The repository is a subdirectory within a desktop git worktree, so local changes should stay contained inside the subdirectory folder.

## Constraints
- **Stack**: Python (Pandas/Scikit-learn), FastAPI, SQLite, Next.js, Tailwind CSS.
- **Git**: Nested directory context, avoid tracking parent desktop directories.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Rule-based first | Establish baseline accuracy before adding ML complexity | — Pending |

---
*Last updated: 2026-06-16 after initial project setup*
