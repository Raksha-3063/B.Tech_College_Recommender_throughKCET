from fastapi import FastAPI, Query, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import List, Optional

# Robust relative/absolute import handling
try:
    from backend.recommendation import recommend, df
    from backend.config import DEFAULT_TOP_N
except ImportError:
    from recommendation import recommend, df
    from config import DEFAULT_TOP_N

# Initialize FastAPI application
app = FastAPI(
    title="KCET College Recommendation API",
    description=(
        "REST API serving eligible engineering colleges and branches "
        "in Karnataka based on historical KCET 2025 cutoff ranks."
    ),
    version="1.0.0"
)

# Allow CORS for Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Extract valid categories dynamically from dataset
VALID_CATEGORIES = set(df['category'].unique())

# Pydantic response model for type safety and Swagger schemas
class CollegeRecommendation(BaseModel):
    college_code: str = Field(..., description="Unique 4-character KCET college code")
    college_name: str = Field(..., description="Name of the engineering college")
    branch: str = Field(..., description="Standardized branch name")
    category: str = Field(..., description="Seat category used for query")
    cutoff_rank: int = Field(..., description="Last admitted rank in 2025")

@app.get("/")
def read_root() -> dict:
    """
    Root API endpoint displaying welcome message.
    """
    return {
        "message": "KCET Recommendation System API"
    }

@app.get("/recommend", response_model=List[CollegeRecommendation])
def get_recommendations(
    rank: int = Query(..., gt=0, description="Your KCET Rank"),
    category: str = Query(..., description="Your Seat Category (e.g. GM, 2AG, SCG)"),
    branch: Optional[str] = Query(None, description="Preferred branch keyword (e.g. COMPUTER, ELECTRONICS)"),
    top_n: int = Query(DEFAULT_TOP_N, gt=0, le=100, description="Number of recommendations to return")
) -> List[CollegeRecommendation]:
    """
    Retrieve college and branch recommendations based on rank, category, and preferred branch.
    """
    category_upper = category.upper().strip()
    if category_upper not in VALID_CATEGORIES:
        raise HTTPException(
            status_code=400,
            detail=(
                f"Invalid seat category '{category}'. "
                f"Valid categories are: {sorted(list(VALID_CATEGORIES))}"
            )
        )
    
    # Get recommendations DataFrame
    results_df = recommend(rank=rank, category=category_upper, branch=branch, top_n=top_n)
    
    # Convert DataFrame to list of dictionaries for Pydantic parsing
    return results_df.to_dict(orient="records")

if __name__ == '__main__':
    import os
    import sys
    import uvicorn
    
    # Insert parent directory in sys.path to run smoothly from project root
    parent_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    if parent_dir not in sys.path:
        sys.path.insert(0, parent_dir)
        
    print("Starting FastAPI development server...")
    print("API Documentation: http://127.0.0.1:8000/docs")
    uvicorn.run("backend.main:app", host="127.0.0.1", port=8000, reload=True)
