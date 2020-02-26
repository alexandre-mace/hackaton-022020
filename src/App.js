import React, {useState} from 'react';
import './App.css';
import categories from "./data/categories.json";
import Navigation from "./components/Navigation";

function App() {
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedGoal, setSelectedGoal] = useState(null);
    const [mascotView, setMascotView] = useState(false);

  return (
      <div>
          {currentPage === 0 &&
          }
          {currentPage === 1 &&
          }
          {currentPage === 2 &&
          }
          <Navigation
            setCurrentPage={setCurrentPage}
          />
      </div>
  );
}

export default App;
