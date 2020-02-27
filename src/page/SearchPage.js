import React, {useEffect, useState} from 'react';
import data from "../data/data.json";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import {Bar} from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';

const useStyles = makeStyles({
    listbox: {
      marginTop: "20px"
    },
    option: {
        marginTop: '20px',
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    paper: {
        borderTopLeftRadius: "25px",
        borderTopRightRadius: "25px",
        padding: "20px",
        minHeight: "60vh",
        maxWidth: "100vw"
    },
    drawerRoot: {
    }
});

const SearchPage = ({ firstOption, setFirstOption, secondOption, setSecondOption, search, setSearch, setFirstOptionSelection, setSecondOptionSelection, firstOptionSelection, secondOptionSelection }) => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        bottom: false,
    });
    const [displayAutocomplete, setDisplayAutocomplete] = React.useState(false);
    const [currentActionSelection, setCurrentActionSelection] = React.useState(null);

    const toggleDrawer = (side, actionSelection, open) => async event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setCurrentActionSelection(actionSelection)
        await setDisplayAutocomplete(!displayAutocomplete);
            setState({ ...state, [side]: open });
    };

    const fullList = side => (
        <div
            className={classes.fullList}
            role="presentation"
        >
            <div
                className={classes.fullList}
                role="presentation"
            >
                <Autocomplete
                    id="combo-box-demo"
                    open={displayAutocomplete}
                    classes={{
                        option: classes.option,
                        listbox: classes.listbox
                    }}
                    options={data}
                    getOptionLabel={option => option.title}
                    onInputChange={(event, value) => {
                            if (currentActionSelection === "first") {
                                setFirstOption(data.filter((singleData) => (singleData.title === value))[0]);
                                setDisplayAutocomplete(!displayAutocomplete);
                                setState({ ["bottom"]: false });
                            }
                            if (currentActionSelection === "second") {
                                setSecondOption(data.filter((singleData) => (singleData.title === value))[0]);
                                setDisplayAutocomplete(!displayAutocomplete);
                                setState({ ["bottom"]: false });
                            }
                        }
                    }
                    style={{ width: 300 }}
                    renderInput={params => (
                        <TextField {...params} label="Action à comparer" variant={"filled"} fullWidth />
                    )}
                />
            </div>
        </div>
    );

    return (
        <div className={"search-wrapper"}>
            <div className={"d-flex flex-column mb-3 align-items-center"}>
                <div className={"page-title"}>Qui est le moins pire ?</div>
                <div className={"select-button"} onClick={toggleDrawer('bottom', "first", true)}>
                    {firstOption ? firstOption.title : "+ Sujet 1"}
                </div>
                <div className={"text-center mt-3 mb-3"}>vs</div>
                <div className={"select-button"} onClick={toggleDrawer('bottom', "second", true)}>
                    {secondOption ? secondOption.title : "+ Sujet 2"}
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
            <Drawer classes={{ paper: classes.paper, root: classes.drawerRoot}} anchor="bottom" open={state.bottom} onClose={toggleDrawer('bottom', false)}>
                {fullList('bottom')}
            </Drawer>

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