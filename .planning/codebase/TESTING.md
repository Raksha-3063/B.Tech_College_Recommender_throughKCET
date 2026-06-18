# Testing

**Date:** 2026-06-17

## Testing Framework
- There is currently no formal testing framework (like `pytest` or `unittest`) integrated into the project.

## Structure
- Testing is performed via simple standalone scripts that run specific functions directly and output to stdout.
- `test_recommendation.py` is located in the root directory and contains a `run_test()` function that hard-codes specific parameters (rank, category, branch) to verify the behavior of `recommendation.py`.

## Mocking and Coverage
- No mocking is implemented; tests run against the actual local CSV dataset.
- There is no automated test coverage reporting configured.
