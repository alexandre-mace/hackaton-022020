import React, {useState} from 'react';
import './App.css';
import data from "./data/data.json";
import Navigation from "./components/Navigation";
import SearchPage from "./page/SearchPage";
import LeaderBoard from './page/LeaderBoard';
import Challenge from './page/Challenge'


function App() {
    const [currentPage, setCurrentPage] = useState(2);
    const [firstOption, setFirstOption] = useState(null);
    const [firstOptionSelection, setFirstOptionSelection] = useState(false);
    const [secondOptionSelection, setSecondOptionSelection] = useState(false);
    const [secondOption, setSecondOption] = useState(null);
    const [search, setSearch] = useState(false);

    return (
        <div className={"app-container"}>
            {currentPage === 0 &&
              <SearchPage
                setFirstOption={setFirstOption}
                setSecondOption={setSecondOption}
                search={search}
                firstOption={firstOption}
                secondOption={secondOption}
                setSearch={setSearch}
                firstOptionSelection={firstOptionSelection}
                secondOptionSelection={secondOptionSelection}
                setFirstOptionSelection={setFirstOptionSelection}
                setSecondOptionSelection={setSecondOptionSelection}
              />
            }
            {currentPage === 1 &&
              <LeaderBoard />
            }
            {currentPage === 2 &&
              <Challenge />
            }
            <Navigation
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
}

export default App;
