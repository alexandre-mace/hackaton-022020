import React, {useState} from 'react';
import './App.css';

function App() {
  const [categories, setCategories] = useState([
    {
      name: 'emails',
      level: 5
    },
    {
      name: 'séries',
      level : 7
    },
    {
      name: 'moteur de recherche',
      level: 8
    }
  ]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [categoryLevel, setCategoryLevel] = useState(1);

  const handleSelectedCategory = (category) => {
    setCategoryLevel(1);
    setSelectedCategory(category);
  };

  const handleLevelChange = (flow) => {
      if (flow === 'down' && categoryLevel > 1) {
          setCategoryLevel(categoryLevel - 1);
      }
      if (flow === 'up' && categoryLevel < selectedCategory.level) {
          setCategoryLevel(categoryLevel + 1)
      }
  };

  return (
      <div>
        <span>les catégories</span>
        <ul>
          {categories.map((category, index) => (
              <li key={index} onClick={() => handleSelectedCategory(category)}>{category.name}</li>
          ))}
        </ul>
          {selectedCategory &&
          <>
              <span>catégorie selectionnée : {selectedCategory ? selectedCategory.name : ""}</span><br/>
              <span>niveau actuel : {categoryLevel} / {selectedCategory.level}</span><br/>
              <span onClick={() => handleLevelChange('down')}>down</span><br/>
              <span onClick={() => handleLevelChange('up')}>up</span>
          </>
          }
      </div>
  );
}

export default App;
