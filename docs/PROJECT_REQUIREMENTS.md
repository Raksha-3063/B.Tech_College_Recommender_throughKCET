# KCET College Recommendation System - Project Requirements

## Project Goal
Build a complete web application that helps KCET students find the best colleges and branches based on their KCET rank.
The objective is to learn the complete AI/ML product development lifecycle from scratch, covering:
- Problem Definition
- Data Collection
- Data Cleaning
- Data Analysis
- Recommendation System Design
- Machine Learning
- Backend Development
- Frontend Development
- Database Design
- Deployment

## Problem Statement
Students struggle to determine:
- Which colleges they can get with their KCET rank
- Which branch is realistically available
- Which colleges have better placements
- Which colleges fit their preferences

The system should help students make better admission decisions.

## Initial Version (Version 1)

### User Inputs
- KCET Rank
- Category (e.g., GM, OBC, SC, ST, etc.)
- Preferred Branch (e.g., CSE, ISE, ECE, etc.)

### System Outputs
- List of eligible colleges
- Available branches
- Previous year cutoff rank
- Basic recommendation ranking

---

## Future Versions

### Version 2 (Information Enrichment)
- Placement data
- Fees
- Location preference
- College ratings

### Version 3 (Machine Learning Integration)
Predict admission probability based on:
- Rank
- Category
- Branch
- College

### Version 4 (Personalized Recommendation Engine)
Personalized recommendations based on:
- Placement preference
- Budget
- Location
- Branch preference

---

## Recommended Tech Stack

### Data Science / ML
- Python
- Pandas
- NumPy
- Matplotlib
- Scikit-learn

### Development Environment
- VS Code
- Jupyter Notebook

### Backend API
- FastAPI

### Database
- SQLite (initially)
- PostgreSQL (later)

### Frontend UI
- Next.js
- Tailwind CSS

### Deployment
- Vercel (Frontend)
- Railway (Backend)
- Supabase PostgreSQL (Database)

---

## Workspace Structure
```text
KCET-Recommendation-System/
├── data/
│   ├── cutoffs_2025.csv
│   ├── cutoffs_2024.csv
│   └── college_info.csv
├── notebooks/
│   ├── 01_data_exploration.ipynb
│   ├── 02_data_cleaning.ipynb
│   ├── 03_recommendation_engine.ipynb
│   └── 04_machine_learning.ipynb
├── docs/
│   └── PROJECT_REQUIREMENTS.md
├── backend/
│   ├── main.py
│   └── recommendation.py
├── frontend/
│   └── [Next.js application]
└── models/
    └── [trained ML models]
```

## Immediate Next Steps
1. Create project folders.
2. Collect one KCET cutoff dataset (2025 preferred).
3. Create `cutoffs_2025.csv` and populate with rows.
4. Load data in Jupyter Notebook using Pandas.
5. Explore dataset structure.
6. Build first rule-based recommendation function.
