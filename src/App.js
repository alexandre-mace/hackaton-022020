import React, {useState} from 'react';
import './App.css';
import data from "./data/data.json";
import Navigation from "./components/Navigation";
import SearchPage from "./page/SearchPage";
import LeaderBoard from './page/LeaderBoard';

function App() {
    const [currentPage, setCurrentPage] = useState(1);
    const [firstOption, setFirstOption] = useState(null);
    const [secondOption, setSecondOption] = useState(null);
    const [search, setSearch] = useState(false);

    return (
        <div>
            {currentPage === 0 &&
              <SearchPage
                  setFirstOption={setFirstOption}
                  setSecondOption={setSecondOption}
                  search={search}
                  firstOption={firstOption}
                  secondOption={secondOption}
                  setSearch={setSearch}
              />
            }
            {currentPage === 1 &&
            <LeaderBoard />
            }
            <Navigation
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
}

export default App;
