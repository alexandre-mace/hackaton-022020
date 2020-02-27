import React, {useState} from 'react';
import './App.css';
import categoriesData from "./data/data.json";
import Navigation from "./components/Navigation";
import SearchPage from "./page/SearchPage";

function App() {
    const [currentPage, setCurrentPage] = useState(0);
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
            <Navigation
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
}

export default App;
