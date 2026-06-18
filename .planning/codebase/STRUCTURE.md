# Structure

**Date:** 2026-06-17

## Directory Layout
- `/backend`: Contains the complete backend API source code.
  - `/backend/data`: Stores static datasets required by the backend (`cutoffs_2025_clean.csv`).
  - `/backend/models`: Placeholder directory intended for future Machine Learning models.
  - `main.py`: The FastAPI application and server entry point.
  - `recommendation.py`: Recommendation engine logic.
  - `data_loader.py`: Dataset loading and normalization logic.
  - `config.py`: Centralized configuration variables.
- `/docs`: Contains project documentation.
  - `PROJECT_REQUIREMENTS.md`: The overarching vision, requirements, versions, and roadmap for the project.
- `/test_recommendation.py`: Standalone script for locally testing the `recommend()` logic.

## Naming Conventions
- Standard Python `snake_case` is used for filenames and functions.
- Capitalized `UPPER_SNAKE_CASE` is used for global configuration constants (`DATA_FILE_PATH`, `DEFAULT_TOP_N`).
- `PascalCase` is used for Pydantic Models (`CollegeRecommendation`).
