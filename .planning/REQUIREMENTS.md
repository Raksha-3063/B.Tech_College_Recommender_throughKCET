# Requirements: KCET College Recommendation System

**Defined:** 2026-06-16
**Core Value:** Accurate and clean college recommendation matching based on historical cutoff ranks.

## v1 Requirements

### Data Management
- [ ] **DATA-01**: Seed `data/cutoffs_2025.csv` with 50-100 manual rows.
- [ ] **DATA-02**: Load and clean the CSV dataset inside a Jupyter notebook using Pandas.
- [ ] **DATA-03**: Perform exploratory data analysis to understand rank distributions.

### Recommendation Engine
- [ ] **REC-01**: Implement `recommend(rank)` rule-based function mapping input rank to colleges where the cutoff rank is greater than or equal to the input.
- [ ] **REC-02**: Expand matching to filter by category and preferred branch.

### Machine Learning
- [ ] **ML-01**: Build and train a Scikit-learn admission probability predictor model.
- [ ] **ML-02**: Save the trained models in the `models/` directory.

### Backend Development
- [ ] **API-01**: Create FastAPI backend application serving recommendation API endpoints.
- [ ] **API-02**: Setup SQLite database schema to store and query college cutoff ranks.

### Frontend Development
- [ ] **UI-01**: Build Next.js web application with a search page inputting rank, category, and preferred branch.
- [ ] **UI-02**: Implement modern responsive UI displaying recommended colleges with cutoff ranks.

### Deployment
- [ ] **DEP-01**: Deploy frontend to Vercel.
- [ ] **DEP-02**: Deploy FastAPI backend to Railway.
- [ ] **DEP-03**: Migrating database to Supabase PostgreSQL.

## Out of Scope
- Placement details, fees, location preferences, and college ratings (deferred to v2).
- Non-engineering branches.

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| DATA-01     | Phase 1 | Pending |
| DATA-02     | Phase 2 | Pending |
| DATA-03     | Phase 2 | Pending |
| REC-01      | Phase 3 | Pending |
| REC-02      | Phase 3 | Pending |
| ML-01       | Phase 4 | Pending |
| ML-02       | Phase 4 | Pending |
| API-01      | Phase 5 | Pending |
| API-02      | Phase 5 | Pending |
| UI-01       | Phase 6 | Pending |
| UI-02       | Phase 6 | Pending |
| DEP-01      | Phase 7 | Pending |
| DEP-02      | Phase 7 | Pending |
| DEP-03      | Phase 7 | Pending |

**Coverage:**
- v1 requirements: 14 total
- Mapped to phases: 14
- Unmapped: 0 ✓

---
*Requirements defined: 2026-06-16*
*Last updated: 2026-06-16 after initial definition*
