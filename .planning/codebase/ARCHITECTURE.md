# Architecture

**Date:** 2026-06-17

## Architectural Pattern
The application follows a simple, layered monolithic architecture, consisting of a web API layer built on top of a data-processing logic layer.

## Layers and Data Flow
1. **API Layer (`backend/main.py`)**: 
   - Handles incoming HTTP requests via FastAPI.
   - Parses and validates query parameters (`rank`, `category`, `branch`, `top_n`).
   - Defines the response schema using Pydantic (`CollegeRecommendation`).
   - Delegates the recommendation task to the logic layer.
2. **Logic Layer (`backend/recommendation.py`)**:
   - Contains the core business logic (`recommend()` function).
   - Filters the dataset based on input constraints (rank <= cutoff rank, branch keyword match).
   - Cleans the college names dynamically and sorts the results.
3. **Data Layer (`backend/data_loader.py`)**:
   - Handles file system operations to locate the CSV dataset.
   - Normalizes and standardizes data (e.g., standardizing branch fragments using `FRAGMENT_FIX`).

## Abstractions and Entry Points
- **Entry Point**: The application is started via `backend/main.py` which runs the Uvicorn server block `if __name__ == '__main__':`.
- **Data Load Abstraction**: Data loading is done once at the module level in `backend/recommendation.py` to keep the data cached in memory during runtime.
