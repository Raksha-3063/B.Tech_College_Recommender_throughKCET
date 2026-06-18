# Codebase Stack

**Date:** 2026-06-17

## Languages
- Python

## Runtime
- Python Environment (Likely local setup, no specific containerization yet)

## Frameworks & Libraries
- **FastAPI**: Backend web framework used to serve the API (`backend/main.py`).
- **Pandas**: Used for data manipulation, cleaning, and rule-based recommendation logic (`backend/data_loader.py`, `backend/recommendation.py`).
- **Pydantic**: Used for type validation and generating API response schemas (`backend/main.py`).
- **Uvicorn**: ASGI web server implementation used to run the FastAPI application (`backend/main.py`).

## Configuration
- `backend/config.py` is used to store constant variables and paths, like the data directory path and the default number of top recommendations.
