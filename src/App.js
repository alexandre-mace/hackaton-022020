import React, {useState} from 'react';
import './App.css';
import categoriesData from "./data/data.json";
import Navigation from "./components/Navigation";
import SearchPage from "./page/SearchPage";

function App() {
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState([]);

  return (
      <div>
          {currentPage === 0 &&
              <SearchPage
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
              />
          }
          <Navigation
            setCurrentPage={setCurrentPage}
          />
      </div>
  );
}

export default App;
