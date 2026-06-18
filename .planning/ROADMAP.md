# Roadmap: KCET College Recommendation System

## Overview
This roadmap structures our project into 7 sequential execution phases, starting from initial workspace setup and mock data seeding, up to full machine learning modeling, backend development, frontend user interface, and cloud deployment.

## Phases
- [ ] **Phase 1: Workspace Setup & Mock Cutoffs** - Scaffold folders and create `cutoffs_2025.csv`.
- [ ] **Phase 2: Data Exploration & Cleaning** - Process mock data using Pandas in Jupyter Notebooks.
- [ ] **Phase 3: Rule-based Recommendation Engine** - Implement basic rank matching algorithm.
- [ ] **Phase 4: Machine Learning Model** - Train probability predictor using Scikit-learn.
- [ ] **Phase 5: Backend API & SQLite Database** - Build FastAPI endpoints and database storage.
- [ ] **Phase 6: Frontend Development** - Build Next.js user interface.
- [ ] **Phase 7: Cloud Deployment** - Deploy applications to Vercel, Railway, and Supabase.

## Phase Details

### Phase 1: Workspace Setup & Mock Cutoffs
**Goal**: Establish directories, document requirements, and create the baseline mock dataset.
**Depends on**: Nothing
**Requirements**: DATA-01
**Success Criteria**:
  1. Folders `data/`, `notebooks/`, and `docs/` exist.
  2. File `docs/PROJECT_REQUIREMENTS.md` is created with requirements.
  3. File `data/cutoffs_2025.csv` exists containing 50-100 manually added rows.
**Plans**: 1 plan

Plans:
- [ ] 01-01: Create folders, requirements document, and mock cutoff CSV file.

### Phase 2: Data Exploration & Cleaning
**Goal**: Load, clean, and explore mock cutoff data using Pandas.
**Depends on**: Phase 1
**Requirements**: DATA-02, DATA-03
**Success Criteria**:
  1. Notebooks `01_data_exploration.ipynb` and `02_data_cleaning.ipynb` are created.
  2. Successfully load the CSV, display descriptive statistics, and perform cleaning steps.
**Plans**: 1 plan

Plans:
- [ ] 02-01: Create and run exploration/cleaning Jupyter notebooks.

### Phase 3: Rule-based Recommendation Engine
**Goal**: Build a deterministic ranking recommendation logic based on historical cutoffs.
**Depends on**: Phase 2
**Requirements**: REC-01, REC-02
**Success Criteria**:
  1. Function `recommend(rank, category, preferred_branch)` matches ranks and returns list of eligible colleges.
  2. Test execution of the function yields correct results in `03_recommendation_engine.ipynb`.
**Plans**: 1 plan

Plans:
- [ ] 03-01: Build and test rule-based recommendation logic.

### Phase 4: Machine Learning Model
**Goal**: Train an admission probability model.
**Depends on**: Phase 3
**Requirements**: ML-01, ML-02
**Success Criteria**:
  1. Scikit-learn classification/regression model is trained in `04_machine_learning.ipynb`.
  2. Model is serialized and saved in the `models/` directory.
**Plans**: 1 plan

Plans:
- [ ] 04-01: Train and save ML admission probability model.

### Phase 5: Backend API & SQLite Database
**Goal**: Build FastAPI web server and database model.
**Depends on**: Phase 3
**Requirements**: API-01, API-02
**Success Criteria**:
  1. FastAPI application serves REST API endpoint `/api/recommend`.
  2. College data is queried from SQLite database.
**Plans**: 1 plan

Plans:
- [ ] 05-01: Develop backend REST API and SQLite database integration.

### Phase 6: Frontend Development
**Goal**: Develop the Next.js frontend with modern, responsive styling.
**Depends on**: Phase 5
**Requirements**: UI-01, UI-02
**Success Criteria**:
  1. User can enter rank, category, and preferred branch on web page.
  2. Eligible colleges and admission probability are displayed interactively.
**Plans**: 1 plan

Plans:
- [ ] 06-01: Create Next.js user interface and connect to backend APIs.

### Phase 7: Cloud Deployment
**Goal**: Deploy application stack to the cloud.
**Depends on**: Phase 6
**Requirements**: DEP-01, DEP-02, DEP-03
**Success Criteria**:
  1. Next.js app deployed to Vercel.
  2. FastAPI deployed to Railway.
  3. Supabase PostgreSQL instance active and receiving data.
**Plans**: 1 plan

Plans:
- [ ] 07-01: Configure production environment variables and deploy applications.

## Progress

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Workspace Setup & Mock Cutoffs | 0/1 | Not started | - |
| 2. Data Exploration & Cleaning    | 0/1 | Not started | - |
| 3. Rule-based Recommendation Engine| 0/1 | Not started | - |
| 4. Machine Learning Model         | 0/1 | Not started | - |
| 5. Backend API & SQLite Database  | 0/1 | Not started | - |
| 6. Frontend Development           | 0/1 | Not started | - |
| 7. Cloud Deployment               | 0/1 | Not started | - |
