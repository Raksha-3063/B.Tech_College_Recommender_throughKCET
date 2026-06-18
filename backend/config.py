import os

# Base directory for the backend component
BACKEND_DIR = os.path.dirname(os.path.abspath(__file__))

# Data directory and paths
DATA_DIR = os.path.join(BACKEND_DIR, "data")
DATA_FILE_PATH = os.path.join(DATA_DIR, "cutoffs_2025_clean.csv")

# Models directory for future ML integration
MODELS_DIR = os.path.join(BACKEND_DIR, "models")

# Application default settings
DEFAULT_TOP_N = 10
