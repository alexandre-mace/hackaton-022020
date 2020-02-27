import React, {useEffect, useState} from 'react';
import data from "../data/data.json";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import {Bar} from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

const useStyles = makeStyles({
    listbox: {
    },
    option: {
        marginTop: '20px',
        padding: "20px",
        paddingBottom: "0"
    },
    fullList: {
        width: 'auto',
    },
    paper: {
        borderTopLeftRadius: "25px",
        borderTopRightRadius: "25px",
        padding: "20px",
        paddingTop: "50px",
        minHeight: "80vh",
        maxWidth: "100vw"
    },
    drawerRoot: {
    }
});

const SearchPage = ({ firstOption, setFirstOption, secondOption, setSecondOption, search, setSearch }) => {
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
        setCurrentActionSelection(actionSelection);

        if (open) {
            setState({ ...state, [side]: open });
            setTimeout(() => {
                setDisplayAutocomplete(!displayAutocomplete)
            }, 180)
        }
        if (!open) {
            setDisplayAutocomplete(!displayAutocomplete);
            setTimeout(() => {

                setState({ ...state, [side]: open });
            }, 180)
        }
    };

    const fullList = side => (
        <div
            className={classes.fullList + " w-100"}
            role="presentation"
        >
                {displayAutocomplete &&
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
                        <TextField {...params} label="Action à comparer" variant="outlined" fullWidth />
                    )}
                />
                }
        </div>
    );

    let barData = false;

    if (search) {
        barData = {
            labels: [],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: firstOption.pollutionScore > secondOption.pollutionScore ? "#2ecc71" : "#e74c3c",
                    borderWidth: 1,
                    data: [firstOption.pollutionScore * 10]
                },
                {
                    label: 'My First dataset',
                    backgroundColor: secondOption.pollutionScore > firstOption.pollutionScore ? "#2ecc71" : "#e74c3c",
                    borderWidth: 1,
                    data: [secondOption.pollutionScore * 10]
                }
            ]
        };
    }

    return (
        <>
            {!search &&
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
                        <Button disabled={(!firstOption || !secondOption)} variant="contained" color="primary" onClick={() => setSearch(true)}>
                            Lancer
                        </Button>
                    </div>
                </div>

                <Drawer classes={{ paper: classes.paper, root: classes.drawerRoot}} anchor="bottom" open={state.bottom} onClose={toggleDrawer('bottom', false)}>
                    {fullList('bottom')}
                </Drawer>
            </div>
            }
            {search &&
            <div className={"search-wrapper"}>
                <div className={"d-flex flex-column mb-3 align-items-center"}>
                    <div className={"page-title"}>Le moins pire est...</div>
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
                        <Bar
                            data={barData}
                            width={300}
                            height={300}
                            options={{
                                legend: {
                                    display: false
                                },
                                tooltips: {
                                    enabled: false
                                },
                                scales: {
                                    xAxes: [{
                                        gridLines: {
                                            display:false
                                        },
                                    }],
                                    yAxes: [{
                                        gridLines: {
                                            display:false
                                        },
                                        ticks: {
                                            beginAtZero: true,
                                            min: 0,
                                            display: false
                                        }
                                    }]
                                }
                            }}
                        />
                    </div>
                </div>
                <div className={"d-flex mt-auto justify-content-center"}>
                    <div>
                        <Button variant="contained" color="primary" onClick={() => {
                            setSearch(false)
                            setFirstOption(null)
                            setSecondOption(null)
                        }}>
                            Nouvelle recherche
                        </Button>
                    </div>
                </div>
            </div>
                </div>
            </div>

            }
            </>
    )
};
export default SearchPage;