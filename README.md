# 📸 Pixisphere - Photographer Listing App

Pixisphere is a modern React-based frontend that displays photographers by category, with advanced filtering, sorting, search, and profile viewing features. Built for an assignment challenge.

## 🛠️ Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/rajendra-jat7/PIXISPHERE.git
   cd pixisphere

   ```

2. **Install dependencies**

   ```bash
   npm install

   ```

3. **Start JSON Server (Mock API)**

   ```bash
   npm install -g json-server
   json-server --watch db.json --port 3001

   ```

4. **Start the React App**

   ```bash
   npm run dev

   ```

5. **Open in browser: `http://localhost:5173`**

### 💡 Overview:

> _"I built a responsive React-based application where users can explore photographers by category (e.g., Maternity), with filtering, sorting, searching, and profile viewing features."_

### 👣 Step-by-Step Implementation:

#### ✅ 1. Project Setup

- Bootstrapped using **Vite + Tailwind CSS**
- Setup `JSON Server` for mock API on port `3001`

#### ✅ 2. API Integration

- Used `useEffect` to fetch photographers
- Stored API response in **Zustand** global store (`usePhotographerStore`)

#### ✅ 3. Filtering & Logic

- Sidebar filters:
  - Price, Rating, Style, City
  - Sorting by Price, Rating, and Recent
- Created a `filtered` array using multiple `.filter()` conditions
- Updated in real-time on every change

#### ✅ 4. Search Bar (Debounced)

- Used `setTimeout` + `clearTimeout` to debounce search
- Fuzzy matches against name, tags, and location

#### ✅ 5. Components:

- `Card.jsx` for photographer preview
- `PhotographerModal.jsx` for full details (gallery, reviews, bio)
- `Pagination.jsx` to control paged results
- `Loader.jsx` shown during data fetch

#### ✅ 6. Responsive Design

- Grid layout adapts to mobile/tablet
- Hamburger menu opens **filter drawer on mobile**
- Used Tailwind utilities like `hidden`, `md:block`, etc.

#### ✅ 7. Deployment

- Deployed on **Vercel** :- **`https://pixisphere-rj.vercel.app/category/maternity`**

## 📸 Screenshot

Here is a preview of the Category Listing Page:

![Demo](/public/screenshots/1.png)

Here is a preview of the Photographer Profile Page:

![Demo](/public/screenshots/2.png)

Here is a preview of the Mobile Device:

![Demo](/public/screenshots/3.png)
