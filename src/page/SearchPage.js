import React, {useState} from 'react';
import data from "../data/data.json";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const SearchPage = ({ selectedOptions, setSelectedOptions }) => {
    return (
        <div className={"container"}>
            {!selectedOptions.length < 2 &&
                <>
                    <Autocomplete
                        id="combo-box-demo"
                        options={data}
                        getOptionLabel={option => option.title}
                        style={{ width: 300 }}
                        renderInput={params => (
                            <TextField {...params} label="Combo box" variant="outlined" fullWidth />
                        )}
                    />
                    <Autocomplete
                        id="combo-box-demo"
                        options={data}
                        getOptionLabel={option => option.title}
                        style={{ width: 300 }}
                        renderInput={params => (
                            <TextField {...params} label="Combo box" variant="outlined" fullWidth />
                        )}
                    />
                </>
            }
            {selectedOptions.length === 2 &&
            <>
            </>
            }
        </div>
    )
};
export default SearchPage;