import React, {useState} from 'react';
import './App.css';

function App() {
  const [categories, setCategories] = useState([
    {
      name: 'emails'
    },
    {
      name: 'séries'
    },
    {
      name: 'moteur de recherche'
    }
  ]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [categoryLevel, setCategoryLevel] = useState();

  return (
      <div>
        <span>les catégories</span>
        <ul>
          {categories.map((category, index) => (
              <li key={index} onClick={() => setSelectedCategory(category)}>{category.name}</li>
          ))}
        </ul>
        <span>catégorie selectionnée : {selectedCategory ? selectedCategory.name : ""}</span>
      </div>
  );
}

export default App;
