import React, {useState} from 'react';
import data from "../data/data.json";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import {Bar} from 'react-chartjs-2';

const SearchPage = ({ firstOption, setFirstOption, secondOption, setSecondOption, search, setSearch, setFirstOptionSelection, setSecondOptionSelection, firstOptionSelection, secondOptionSelection }) => {

    return (
        <div className={"search-wrapper"}>
            <div className={"d-flex flex-column mb-3 align-items-center"}>
                <div className={"page-title"}>Qui est le moins pire ?</div>
                <div className={"select-button"} onClick={() => setFirstOptionSelection(true)}>
                    + Sujet 1
                </div>
                <div className={"text-center mt-3 mb-3"}>vs</div>
                <div className={"select-button"} onClick={() => setFirstOptionSelection(true)}>
                    + Sujet 2
                </div>
            </div>
            <div className={"d-flex mt-auto justify-content-center"}>
                <div>
                    <Button variant="contained" color="primary" onClick={() => setSearch(true)}>
                        Lancer
                    </Button>
                </div>
            </div>
            {search &&
            <div className={"mt-3"}>
                <div>
                    {
                        firstOption.pollutionScore > secondOption.pollutionScore
                            ? secondOption.title
                            : firstOption.title
                    } est le moins pire
                </div>
                <div className={"d-flex justify-content-center"}>
                    <div>
                        <div className="bar-outside">
                            <div className="bar-inside" id="bar-green"></div>
                        </div>
                        <p className="percent">90%</p>
                        {firstOption.pollutionScore}
                    </div> vs
                    <div>
                        <div className="item">
                            <div className="bar-outside">
                                <div className="bar-inside" id="bar-red"></div>
                            </div>
                            <p className="percent">100%</p>
                        </div>
                        {secondOption.pollutionScore}
                    </div>
                </div>
            </div>
            }
            {firstOptionSelection &&
            <div className="search-input-wrapper">
                <Autocomplete
                    id="combo-box-demo"
                    open={true}
                    classes={{
                        option: {
                            marginTop: 20
                        }
                    }}
                    className={"search-input"}
                    options={data}
                    getOptionLabel={option => option.title}
                    onInputChange={(event, value) => {
                        setFirstOption(data.filter((singleData) => (singleData.title === value))[0]);
                    }}
                    style={{ width: 300 }}
                    renderInput={params => (
                        <TextField {...params} label="Action à comparer" variant={"filled"} fullWidth />
                    )}
                />
            </div>
            }
            {secondOptionSelection &&
            <div className="search-input-wrapper">
                <Autocomplete
                    open={true}
                    id="combo-box-demo"
                    className={"search-input"}
                    options={data}
                    getOptionLabel={option => option.title}
                    onInputChange={(event, value) => {
                        setSecondOption(data.filter((singleData) => (singleData.title === value))[0])
                    }}
                    style={{ width: 300 }}
                    renderInput={params => (
                        <TextField {...params} label="Action à comparer" variant="filled" fullWidth />
                    )}
                />
            </div>
            }
        </div>
    )
};
export default SearchPage;