import React, {useState} from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import SearchPage from "./page/SearchPage";
import LeaderBoard from './page/LeaderBoard';
import Challenge from './page/challenge/Challenge'

const names = [
    'Nokia 3310',
    'Fibre optique',
    'Batterie au lithium',
    "Disque dur externe"
];

function App() {
    const [currentPage, setCurrentPage] = useState(0);
    const [displayHeader, setDisplayHeader] = useState(true)
    const [firstOption, setFirstOption] = useState(null);
    const [firstOptionSelection, setFirstOptionSelection] = useState(false);
    const [secondOptionSelection, setSecondOptionSelection] = useState(false);
    const [secondOption, setSecondOption] = useState(null);
    const [search, setSearch] = useState(false);
    const [onBoarding, setOnBoarding] = React.useState(false);
    const [randomUsername, setRandomUsername] = React.useState(names[Math.floor(Math.random()*names.length)]);

    const resetApp = () => {
        setFirstOption(null)
        setSecondOption(null)
        setSearch(false)
        setCurrentPage(0)
    }
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
              <Challenge
                  setCurrentPage={setCurrentPage}
                  resetApp={resetApp}
                  setDisplayHeader={setDisplayHeader}
                  randomUsername={randomUsername}
              />
            }
            {displayHeader && (
              <Navigation
                  setCurrentPage={setCurrentPage}
                  setSearch={setSearch}
              />
            )}
            {!displayHeader && (
              <div className='leave' >
                <button className='leave__button' onClick={() => {
                  setDisplayHeader(true)
                  resetApp()
                }}>
                  Quitter le défi
                </button>
              </div>
            )}
        </div>
    );
}

export default App;
