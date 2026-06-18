from typing import Optional
import pandas as pd

# Robust relative/absolute import handling
try:
    from backend.data_loader import load_clean_data
    from backend.config import DEFAULT_TOP_N
except ImportError:
    from data_loader import load_clean_data
    from config import DEFAULT_TOP_N

# Load dataset once at module initialization
df: pd.DataFrame = load_clean_data()

def recommend(
    rank: int,
    category: str,
    branch: Optional[str] = None,
    top_n: int = DEFAULT_TOP_N
) -> pd.DataFrame:
    """
    Recommend colleges based on KCET rank, category, and preferred branch.
    
    Parameters:
        rank (int)                  : The student's KCET rank.
        category (str)              : Seat category (e.g. 'GM', '2AG', 'SCG').
        branch (Optional[str])      : Preferred branch keyword (optional).
        top_n (int)                 : Number of recommendations to return.
        
    Returns:
        pd.DataFrame: Top N recommended colleges sorted by cutoff rank.
    """
    # 1. Filter by category
    filtered = df[df['category'] == category].copy()
    
    # 2. Filter by branch if provided
    if branch:
        # Map common branch abbreviations to their corresponding standard keywords
        branch_map = {
            'CSE': 'COMPUTER SCIENCE',
            'ECE': 'ELECTRONICS',
            'ISE': 'INFORMATION SCIENCE',
            'MECH': 'MECHANICAL',
            'ME': 'MECHANICAL',
            'EEE': 'ELECTRICAL',
            'EE': 'ELECTRICAL',
            'CIVIL': 'CIVIL',
            'AIML': 'ARTIFICIAL INTELLIGENCE',
            'AI': 'ARTIFICIAL INTELLIGENCE',
            'DS': 'DATA SCIENCE'
        }
        normalized_branch = branch_map.get(branch.upper().strip(), branch)
        filtered = filtered[
            filtered['branch'].str.contains(normalized_branch, case=False, na=False)
        ]
        
    # 3. Filter by cutoff rank (student's rank must be <= cutoff rank)
    eligible = filtered[filtered['cutoff_rank'] >= rank].copy()
    
    # 4. Sort and deduplicate duplicate college/branch listings, keeping closest cutoff rank
    eligible = eligible.sort_values('cutoff_rank', ascending=True)
    eligible = eligible.drop_duplicates(
        subset=['college_code', 'branch'], keep='first'
    )
    
    # 5. Clean up college names dynamically (remove address details after '(' or ',')
    eligible['college_name'] = eligible['college_name'].str.split(
        r'[\(\,]', regex=True
    ).str[0].str.strip()
    
    # 6. Format final output
    result = eligible[['college_code', 'college_name', 
                        'branch', 'category', 'cutoff_rank']].head(top_n)
    result = result.reset_index(drop=True)
    result.index += 1  # Start ranking from 1
    
    return result
