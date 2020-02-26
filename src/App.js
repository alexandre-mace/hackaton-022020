import React, {useState} from 'react';
import './App.css';
import categories from "data/categories.json";

function App() {
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedGoal, setSelectedGoal] = useState(null);
    const [mascotView, setMascotView] = useState(false);

  return (
      <div>
      </div>
  );
}

export default App;
