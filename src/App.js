import React, {useState} from 'react';
import './App.css';
import categoriesData from "./data/categories.json";
import Navigation from "./components/Navigation";
import CategoriesPage from "./page/CategoriesPage";

function App() {
    const [currentPage, setCurrentPage] = useState(0);
    const [categories, setCategories] = useState(categoriesData);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedGoal, setSelectedGoal] = useState(null);
    const [mascotView, setMascotView] = useState(false);

  return (
      <div>
          {currentPage === 1 &&
              <CategoriesPage
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
          }
          <Navigation
            setCurrentPage={setCurrentPage}
          />
      </div>
  );
}

export default App;
