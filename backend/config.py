
import os

# Base directory for the backend component
BACKEND_DIR = os.path.dirname(os.path.abspath(__file__))

# Project root directory
PROJECT_ROOT = os.path.dirname(BACKEND_DIR)

# Data directory and file path
DATA_DIR = os.path.join(PROJECT_ROOT, "data")
DATA_FILE_PATH = os.path.join(DATA_DIR, "cutoffs_2025_all_rounds.csv")

# Models directory
MODELS_DIR = os.path.join(BACKEND_DIR, "models")

# Application settings
DEFAULT_TOP_N = 10

