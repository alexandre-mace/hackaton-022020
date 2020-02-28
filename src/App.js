import React, {useState} from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import SearchPage from "./page/SearchPage";
import LeaderBoard from './page/LeaderBoard';
import Challenge from './page/challenge/Challenge'


function App() {
    const [currentPage, setCurrentPage] = useState(0);
    const [displayHeader, setDisplayHeader] = useState(true)
    const [firstOption, setFirstOption] = useState(null);
    const [firstOptionSelection, setFirstOptionSelection] = useState(false);
    const [secondOptionSelection, setSecondOptionSelection] = useState(false);
    const [secondOption, setSecondOption] = useState(null);
    const [search, setSearch] = useState(false);
    const [onBoarding, setOnBoarding] = React.useState(false);

    return (
        <div className={"app-container"}>
            {currentPage === 0 &&
              <SearchPage
                setFirstOption={setFirstOption}
                setSecondOption={setSecondOption}
                setCurrentPage={setCurrentPage}
                setOnBoarding={setOnBoarding}
                onBoarding={onBoarding}
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
            <LeaderBoard
                setCurrentPage={setCurrentPage}
                setSearch={setSearch}
                setFirstOption={setFirstOption}
                setSecondOption={setSecondOption}
            />
            }
            {currentPage === 2 &&
              <Challenge setDisplayHeader={setDisplayHeader} />
            }
            {displayHeader && (
              <Navigation
                  setCurrentPage={setCurrentPage}
                  setSearch={setSearch}
              />
            )}
        </div>
    );
}

export default App;
