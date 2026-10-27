# 🎓 KCET College Recommendation System

A full-stack web application that helps Karnataka students discover suitable engineering colleges based on their **KCET rank**, **seat category**, and **preferred branch** using historical KCET cutoff data.

## 🚀 Features

* Search colleges using KCET rank
* Filter by seat category (GM, OBC, SC, ST, etc.)
* Branch-specific recommendations
* FastAPI REST API backend
* Modern Next.js frontend
* Responsive UI built with Tailwind CSS
* Swagger API documentation
* Real-time recommendation results

---

## 🛠️ Tech Stack

### Backend

* FastAPI
* Pandas
* Pydantic
* Uvicorn

### Frontend

* Next.js
* TypeScript
* Tailwind CSS
* Axios.
* Lucide React

### Tools

* Git & GitHub
* VS Code
* Antigravity IDE

---

## 📂 Project Structure

```text
KCET-Recommendation-System/
│
├── backend/
│   ├── main.py
│   ├── recommendation.py
│   ├── data_loader.py
│   └── config.py
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── data/
│   └── cutoffs_2025_clean.csv
│
├── docs/
├── notebooks/
├── requirements.txt
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Raksha-3063/B.Tech_College_Recommender_throughKCET.git
cd B.Tech_College_Recommender_throughKCET
```

---

## Backend Setup

Install dependencies:

```bash
pip install -r requirements.txt
```

Start FastAPI server:

```bash
uvicorn backend.main:app --reload
```

Backend runs at:

```text
http://127.0.0.1:8000
```

Swagger Documentation:

```text
http://127.0.0.1:8000/docs
```

---

## Frontend Setup

Move into frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Frontend runs at:

```text
http://localhost:3000
```

---

## 📊 How It Works

1. User enters:

   * KCET Rank
   * Seat Category
   * Preferred Branch

2. Frontend sends request to FastAPI backend.

3. Recommendation engine:

   * Filters colleges by category
   * Checks historical cutoff ranks
   * Applies branch matching
   * Returns eligible colleges

4. Results are displayed instantly on the frontend.

---

## 🔮 Future Improvements

* Admission Probability Prediction (ML)
* College Placement Insights
* SQLite/PostgreSQL Integration
* User Authentication
* Saved Preferences
* College Comparison Dashboard
* KCET Cutoff Trend Analysis

---

## 👩‍💻 Author

**Raksha C C**

* GitHub: https://github.com/Raksha-3063
* LinkedIn: Add your LinkedIn profile link here

---

## ⭐ Project Status

✅ Data Cleaning Completed

✅ Recommendation Engine Implemented

✅ FastAPI Backend Developed

✅ Next.js Frontend Developed

✅ API Integration Completed

✅ UI/UX Enhancement Completed

✅ GitHub Repository Published

⏳ Deployment (Planned)

⏳ Machine Learning Enhancement (Future Version)

---

## License

This project is created for educational and portfolio purposes.
