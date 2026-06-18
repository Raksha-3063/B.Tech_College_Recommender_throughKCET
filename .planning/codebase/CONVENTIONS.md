# Conventions

**Date:** 2026-06-17

## Code Style and Typing
- Extensive use of Python Type Hinting (e.g., `-> List[CollegeRecommendation]`, `-> pd.DataFrame`).
- Clear and detailed docstrings for all major functions using standard block quotes.
- Fallback import syntax (`try...except ImportError`) is widely used across backend files to allow execution both from the project root and from within the backend folder directly.

## Validation and Error Handling
- Query parameters are strongly validated using FastAPI's `Query` validation (e.g., `gt=0`, `le=100`).
- Business logic validation throws a FastAPI `HTTPException(status_code=400)` when a user submits an invalid seat category, rather than failing silently.
- Output serialization is strictly enforced by Pydantic response models (`response_model=List[CollegeRecommendation]`).

## Data Handling Patterns
- Data mutation is performed on explicit copies of DataFrames (`.copy()`) to avoid SettingWithCopyWarnings from Pandas.
- Dictionary mapping is heavily relied upon to clean messy branch and abbreviation strings (`FRAGMENT_FIX`, `branch_map`).
