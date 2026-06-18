# Frontend Development Implementation Plan

This document outlines the architecture and implementation strategy for Phase 2: Frontend Development of the KCET Recommendation System using Next.js (App Router), TypeScript, Tailwind CSS, and Axios.

## User Review Required
Please review the proposed folder structure, state management, and roadmap below. If this aligns with your expectations, approve it, and I will commit this plan and proceed with the execution phase. 

> [!IMPORTANT]
> Once you approve this plan, I will commit it to the repository as requested.

## Proposed Changes

### 1. Folder Structure
We will scaffold a Next.js application inside a new `frontend/` directory using the `src/` directory convention for better separation of configuration and code.

```text
frontend/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root HTML layout and global providers
│   │   ├── page.tsx           # Main landing page
│   │   └── globals.css        # Tailwind global imports
│   ├── components/
│   │   ├── ui/                # Reusable dumb components (Button, Input, Spinner)
│   │   ├── RecommendationForm.tsx # Search criteria form
│   │   ├── ResultsTable.tsx   # Data display component
│   │   └── ErrorAlert.tsx     # Reusable error display
│   ├── hooks/
│   │   └── useRecommendations.ts # Custom hook for API fetching & state
│   ├── lib/
│   │   ├── api.ts             # Axios instance & API functions
│   │   └── utils.ts           # Helper functions (e.g., classname merging)
│   └── types/
│       └── index.ts           # TypeScript interfaces (CollegeRecommendation)
├── public/                    # Static assets
├── tailwind.config.ts         # Tailwind configuration
└── package.json               # Dependencies
```

### 2. Component Hierarchy
The UI will be structured with clear boundaries between Server and Client Components.

- **`Home` (Server Component)**: The main page wrapper.
  - **`Header` (Static)**: Logo and title.
  - **`RecommendationApp` (Client Component)**: The main stateful container.
    - **`RecommendationForm`**: Contains inputs for Rank, Category, and Branch.
      - **`SubmitButton`**: Includes the `LoadingSpinner` when API is active.
    - **`ErrorAlert`**: Conditionally renders if the API returns an error or validation fails.
    - **`ResultsTable`**: Renders the array of results returned from the backend.
      - **`EmptyState`**: Shown when a successful query returns 0 results.

### 3. API Integration Strategy
- **Client**: `axios` will be configured in `src/lib/api.ts` with a base URL pointing to the FastAPI backend (`http://127.0.0.1:8000`).
- **Typing**: The FastAPI response models will be perfectly mirrored in `src/types/index.ts`.
- **Error Handling**: Axios interceptors or try/catch blocks will format FastAPI's `400 Bad Request` or `500 Internal Server Error` into user-friendly string messages to feed into the UI.

### 4. State Management Strategy
Given the contained scope of the application, global state (e.g., Redux, Zustand) is unnecessary. 
- We will use **React Context** or a simple **Custom Hook (`useRecommendations`)** holding local state via `useState`.
- **State variables**:
  - `results: CollegeRecommendation[] | null`
  - `isLoading: boolean`
  - `error: string | null`
- The `RecommendationApp` component will hold this state and pass the results down to `ResultsTable` and the trigger function down to `RecommendationForm`.

### 5. Responsive UI Plan
- **Mobile-First Design**: Utilizing Tailwind's `sm:`, `md:`, and `lg:` prefixes.
- **Form Layout**: 
  - *Mobile*: Inputs stack vertically taking 100% width.
  - *Desktop*: Inputs sit inline horizontally or in a clean CSS Grid layout.
- **Table Handling**: Standard HTML tables break mobile layouts. The `ResultsTable` container will have `overflow-x-auto` to allow horizontal scrolling on small devices, keeping the main page layout intact.
- **Aesthetics**: Clean, modern interface with subtle shadows (`shadow-sm`), rounded corners (`rounded-lg`), and standard accessible focus rings for inputs.

### 6. Development Roadmap
- **Step 1:** Initialize the Next.js application using `npx create-next-app@latest frontend --typescript --tailwind --app --src-dir --use-npm`.
- **Step 2:** Define TypeScript interfaces in `types/index.ts` and setup Axios configuration.
- **Step 3:** Build the UI components (`Form`, `Inputs`, `Table`, `Spinner`, `Alerts`).
- **Step 4:** Integrate API calls and wire up the state management.
- **Step 5:** Polish the UI, ensuring mobile responsiveness and resolving edge cases (e.g., empty results, network timeout).

## Verification Plan
### Automated Tests
- Run Next.js linting (`npm run lint`) and TypeScript compilation (`npm run build`).
### Manual Verification
- Start the FastAPI backend and Next.js frontend concurrently.
- Test form validation (e.g., invalid rank, missing category).
- Verify loading spinner activates during fetch.
- Verify results populate accurately and responsively on different screen sizes.
