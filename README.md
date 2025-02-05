# Movie Search App (Fullstack)

## Task Summary  
Develop a frontend application for quickly searching information about movies and TV series from [KinoPoisk](https://www.kinopoisk.ru/).

---

## Functional Requirements  

### 1. Movie List Page  
- Displays a list of movies and TV series  
- Pagination is implemented  
- Option to select the number of movies per page (default: **10**)  
- Filters available (**by year, country, and age rating**)  
- Search by movie title  
- Ability to navigate to the movie details page  

#### Bonus Features:  
- Share search results via link  
- Search history (**e.g., last 20 queries**)  
- Suggestions from previous search queries when typing a new one  
- Search suggestions filtered dynamically  
  - Example: Typing **"fight"** suggests words containing **"fight"**:  
    _"firefight," "fighter," etc._ (like Google search)  
- **Debounced search** (triggers after **1 second** of inactivity)

---

### 2. Movie Details Page  
- Displays **movie/TV series information**, including:  
  - Title  
  - Description  
  - Rating  
  - Actor list (paginated if more than 10 actors)  
  - Seasons and episodes (paginated if applicable)  
  - User reviews (paginated)  
  - Posters displayed in a **carousel**  
  - Similar movies displayed in a **carousel**, each clickable  

#### Additional Details:  
- If any list is empty (reviews, actors, seasons), display a **placeholder message**  
- **"Back" button** retains filters and page number  
- **User authentication is required**  

---

## Non-Functional Requirements  

### Tech Stack:  
- **Frontend framework:** Vue.js v3  
- **Component library:** Any public UI library (e.g., Ant Design, Mantine)  
- **Bundler:** Vite  
- **Server:** Node.js 18+  
- **Package manager:** npm  

### Other Requirements:  
- **Responsive design** (works on mobile & desktop)  
- **SSR** all pages should be rendered on the server
- **TypeScript** usage  
- **Docker file** for deployment  
- **Retry failed requests up to 3 times**  
- **Cancel outdated requests when navigating pages**  
- **80%+ unit test coverage**  
