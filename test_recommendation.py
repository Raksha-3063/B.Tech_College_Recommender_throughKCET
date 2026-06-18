from backend.recommendation import recommend

def run_test() -> None:
    """
    Executes a test query against the recommendation engine
    using standard parameters to verify root-level import and standalone execution.
    """
    print("=" * 60)
    print("Root Verification Test: test_recommendation.py")
    print("=" * 60)
    
    # Input parameters requested by user
    rank = 12000
    category = "GM"
    branch = "COMPUTER SCIENCE AND ENGINEERING"
    
    print(f"Testing input parameters:")
    print(f"  Rank     : {rank}")
    print(f"  Category : {category}")
    print(f"  Branch   : {branch}")
    print("-" * 60)
    
    # Fetch top 10 recommendations
    results = recommend(rank=rank, category=category, branch=branch, top_n=10)
    
    # Print results
    print(results.to_string())
    print("=" * 60)
    print("Test passed successfully [OK]")

if __name__ == '__main__':
    run_test()
