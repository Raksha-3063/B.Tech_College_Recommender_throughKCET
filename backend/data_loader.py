import os
import pandas as pd

# Robust relative/absolute import handling
try:
    from backend.config import DATA_FILE_PATH
except ImportError:
    from config import DATA_FILE_PATH

# Dictionary to standardize and clean fragmented branch names
FRAGMENT_FIX = {
    'COMPUTER': 'COMPUTER SCIENCE AND ENGINEERING',
    'B TECH IN': 'B TECH IN COMPUTER SCIENCE AND ENGINEERING',
    'B Tech in': 'B TECH IN COMPUTER SCIENCE AND ENGINEERING',
    'B TECH (HONS)': 'B TECH (HONS) COMPUTER SCIENCE AND ENGINEERING',
    'B.TECH IN': 'B.TECH IN COMPUTER SCIENCE AND ENGINEERING',
    'B.Tech in': 'B.TECH IN COMPUTER SCIENCE AND ENGINEERING',
    'BTECH IN': 'BTECH IN COMPUTER SCIENCE AND ENGINEERING',
    'ELECTRONICS &': 'ELECTRONICS & COMMUNICATION ENGINEERING',
    'ELECTRICAL &': 'ELECTRICAL & ELECTRONICS ENGINEERING',
    'ELECTRONICS': 'ELECTRONICS AND COMMUNICATION ENGG',
    'ROBOTICS AND': 'ROBOTICS AND AUTOMATION',
    'ARTIFICIAL': 'ARTIFICIAL INTELLIGENCE AND DATA SCIENCE',
    'ARTIFICIAL INTELLIGENCE': 'ARTIFICIAL INTELLIGENCE AND DATA SCIENCE',
    'AUTOMATION': 'AUTOMATION AND ROBOTICS',
    'INFORMATION': 'INFORMATION SCIENCE AND ENGINEERING',
    'INFORMATION SCIENCE': 'INFORMATION SCIENCE AND ENGINEERING',
    'MECHANICAL': 'MECHANICAL ENGINEERING',
    'INDUSTRIAL': 'INDUSTRIAL ENGINEERING & MANAGEMENT',
    'CHEMICAL': 'CHEMICAL ENGINEERING',
    'CIVIL': 'CIVIL ENGINEERING',
    'AERONAUTICAL': 'AERONAUTICAL ENGINEERING',
    'AERO SPACE': 'AEROSPACE ENGINEERING',
    'AERO SPACE ENGINEERING': 'AEROSPACE ENGINEERING',
    'AGRICULTURE': 'AGRICULTURE ENGINEERING',
    'AUTOMOBILE': 'AUTOMOBILE ENGINEERING',
    'BIOMEDICAL': 'BIO-MEDICAL ENGINEERING',
    'BIO-': 'BIO-TECHNOLOGY',
    'BIO- TECHNOLOGY': 'BIO-TECHNOLOGY',
    'MECHATRONICS': 'MECHATRONICS ENGINEERING',
    'MECHATRONICS 5': 'MECHATRONICS ENGINEERING',
    'DESIGN 5': 'DESIGN',
    'SCIENCE': 'COMPUTER SCIENCE AND ENGINEERING',
    'TECHNOLOGY': 'INFORMATION TECHNOLOGY',
    'ENGINEERING': 'COMPUTER SCIENCE AND ENGINEERING',
    'AND ROBOTIC ENGINEERING': 'ROBOTICS AND AUTOMATION',
    'SILK': 'SILK TECHNOLOGY',
}

def load_clean_data():
    """
    Loads the cleaned cutoff dataset and standardizes branch names.
    
    Returns:
        DataFrame: Cleaned and standardized pandas DataFrame.
    """
    if not os.path.exists(DATA_FILE_PATH):
        raise FileNotFoundError(
            f"Cleaned cutoffs dataset not found at: {DATA_FILE_PATH}\n"
            "Please ensure 'cutoffs_2025_clean.csv' is placed inside 'backend/data/'."
        )
    
    df = pd.read_csv(DATA_FILE_PATH)
    
    # Normalize branch names using the standard mapping
    df['branch'] = df['branch'].replace(FRAGMENT_FIX)
    df['branch'] = df['branch'].str.strip()
    
    return df

if __name__ == '__main__':
    print("Testing data loader...")
    try:
        df_test = load_clean_data()
        print(f"Success! Loaded {len(df_test):,} rows.")
        print("Columns:", df_test.columns.tolist())
    except Exception as e:
        print("Error loading data:", e)
