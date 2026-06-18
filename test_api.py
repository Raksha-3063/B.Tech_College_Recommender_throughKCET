from fastapi.testclient import TestClient
from backend.main import app

client = TestClient(app)

def run_api_tests():
    print("Testing / endpoint")
    response = client.get("/")
    assert response.status_code == 200
    print("  / passed:", response.json())
    
    print("Testing /recommend endpoint with valid data")
    response = client.get("/recommend?rank=12000&category=GM&branch=COMPUTER")
    assert response.status_code == 200
    print("  /recommend passed, returned", len(response.json()), "results")

    print("Testing /recommend endpoint with invalid category")
    response = client.get("/recommend?rank=12000&category=INVALID&branch=COMPUTER")
    assert response.status_code == 400
    print("  /recommend invalid category passed, error:", response.json())
    
    print("All API tests passed successfully!")

if __name__ == "__main__":
    run_api_tests()
