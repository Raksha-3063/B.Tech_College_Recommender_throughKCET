# Concerns

**Date:** 2026-06-17

## Technical Debt and Issues
- **Import Workarounds:** The use of `try...except ImportError` for relative vs absolute imports is an anti-pattern. Properly configuring `__init__.py` and running the app as a module (`python -m backend.main`) would eliminate this technical debt.
- **Hardcoded Data Normalization:** The `FRAGMENT_FIX` dictionary in `backend/data_loader.py` is hardcoded with many string literals to clean data. If the dataset changes or new edge cases arise, this file will need continuous manual updates.
- **In-Memory Dataset:** Loading the entire CSV into memory using Pandas works perfectly for Version 1. However, if the project scales (as suggested in future versions adding more data points like placements and fees), relying solely on Pandas in-memory might cause high memory consumption for the web service. A migration to SQLite or PostgreSQL (as specified in `PROJECT_REQUIREMENTS.md`) will eventually be necessary.

## Security
- The FastAPI server currently runs strictly locally (`127.0.0.1:8000`). No CORS or Security middleware is currently implemented, which will be needed when a frontend communicates with it.

## Performance
- The application re-sorts and filters the dataset on every single API request. Currently, this is negligible given the dataset size, but query performance could degrade if the data scales.
