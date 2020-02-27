import React, {useState} from 'react';
import data from "../data/data.json";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';

const SearchPage = ({ firstOption, setFirstOption, secondOption, setSecondOption, search, setSearch }) => {

    return (
        <div className={"container"}>
                <div className={"search-wrapper"}>
                    <div className={"d-flex justify-content-center mb-3"}>
                        <Autocomplete
                            id="combo-box-demo"
                            className={"search-input"}
                            options={data}
                            getOptionLabel={option => option.title}
                            onInputChange={(event, value) => {
                                console.log(data.filter((singleData) => (singleData.title === value))[0])
                                setFirstOption(data.filter((singleData) => (singleData.title === value))[0]);
                            }}
                            style={{ width: 300 }}
                            renderInput={params => (
                                <TextField {...params} label="Action à comparer" variant={"filled"} fullWidth />
                            )}
                        />
                        <Autocomplete
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
                    <div className={"d-flex justify-content-center"}>
                        <div>
                            <Button variant="contained" color="primary" onClick={() => setSearch(true)}>
                                GO
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
                                {firstOption.pollutionScore}
                            </div> vs
                            <div>
                                {secondOption.pollutionScore}
                            </div>
                        </div>
                    </div>
                    }
                </div>
        </div>
    )
};
export default SearchPage;