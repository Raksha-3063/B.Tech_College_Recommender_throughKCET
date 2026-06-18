# KCET Recommendation System - Project Audit Report

## 1. Project Purpose
A web application designed to help KCET students find eligible engineering colleges and branches based on their KCET rank, seat category, and preferred branch, utilizing historical 2025 cutoff rank data.

## 2. Architecture & Data Flow
- **Data Source:** Processed dataset (`cutoffs_2025_clean.csv`) stored in `backend/data/`.
- **Data Loading:** `backend/data_loader.py` loads the dataset and normalizes fragmented branch names (e.g., standardizing "CSE", "COMPUTER" to "COMPUTER SCIENCE AND ENGINEERING").
- **Recommendation Logic:** `backend/recommendation.py` filters the dataset by category, standardizes the branch query, and applies rank thresholds (student rank must be $\le$ college cutoff rank). Results are sorted and deduplicated.
- **API Layer:** `backend/main.py` uses FastAPI to expose endpoints, validating incoming requests using Pydantic models.

## 3. Backend Architecture
The backend is a modular Python REST API:
- `main.py`: FastAPI server setup, routing, and Pydantic schema validation.
- `recommendation.py`: Core logic for sorting and filtering pandas DataFrames.
- `data_loader.py`: Disk I/O and data standardization.
- `config.py`: Environment and path configuration.

## 4. API Endpoints
- `GET /` : Returns a simple welcome/health-check message.
- `GET /recommend` : Accepts query parameters `rank`, `category`, `branch`, and `top_n`. Validates the category dynamically against unique dataset categories and returns a JSON list of structured Pydantic objects.

## 5. Dataset Structure
The cleaned dataset (`cutoffs_2025_clean.csv`) contains:
- `college_code` (str): Unique KCET college identifier.
- `college_name` (str): Full name of the college.
- `branch` (str): Standardized engineering branch.
- `category` (str): Seat category (e.g., GM, SCG, 2AG).
- `cutoff_rank` (int): Closing rank for that specific bucket in 2025.

## 6. Folder Responsibilities
- `backend/`: Contains the FastAPI application, configuration, and data-loading scripts.
- `backend/data/`: Stores the finalized dataset ready for application use.
- `data/`: Contains raw, unprocessed datasets (all rounds).
- `docs/`: Project documentation and requirement specs.
- `notebooks/`: Jupyter notebooks for exploratory data analysis (EDA) and data cleaning.
- `.planning/`: Agent-generated state, roadmap, and workflow metadata.

---

## 7. Health Check & Validation Results
- **Recommendation Engine:** Passed. The filtering logic correctly handles ranks, categories, and branch standardization.
- **Data Loading:** Passed. `cutoffs_2025_clean.csv` successfully loads without errors.
- **FastAPI Backend:** Passed. Endpoints initialize correctly.
- **API Endpoints:** Passed. HTTP 200 returned for valid queries; HTTP 400 validation error returned for invalid categories.
- **Test Scripts:** Passed. `test_recommendation.py` and API tests complete successfully. Imports use robust `try/except` blocks handling absolute/relative contexts cleanly.

## 8. Audit Findings

### What is working
- Core logic and rules-based recommendations.
- Data cleaning and standardization pipeline.
- REST API layer with type validation and dynamic error handling.
- Module imports and environment pathing.

### What is incomplete
- **Database Integration:** Application currently holds data in memory (Pandas). SQLite/PostgreSQL mentioned in requirements is not yet integrated.
- **Frontend App:** The Next.js application has not been scaffolded.
- **Machine Learning Integration:** The `backend/models` directory is currently empty, meaning predictive capabilities are not yet developed.

### Technical Debt & Cleanup Opportunities
- **Dependency Management:** There is no `requirements.txt`, `Pipfile`, or `pyproject.toml` file. Dependencies (`fastapi`, `uvicorn`, `pandas`, `pydantic`) are implied but not explicitly declared.
- **Testing Coverage:** While a root test script exists, comprehensive unit testing using `pytest` is missing.
- **Hardcoded Data:** The system assumes the CSV is static; a process to gracefully update the data without reloading the server isn't implemented.

### Security & Performance Issues
- *Performance:* Loading a large CSV file into Pandas on server startup works for small datasets but won't scale. Moving to a relational database (SQLite/PostgreSQL) will resolve this.
- *Security:* No immediate vulnerabilities found in the current scope. Input validation is handled correctly via FastAPI's Pydantic validation.

## 9. Recommended Next Phase
Before moving to frontend development, the following improvements are recommended:
1. **Dependency Management:** Create a `requirements.txt` file outlining standard dependencies to ensure reproducible builds.
2. **Move Data to Database (Optional but Recommended):** Transition from Pandas CSV loading to SQLite to align with the V1 requirements.
3. **Frontend Initialization:** Scaffold the Next.js frontend with Tailwind CSS to begin building the UI layer.
