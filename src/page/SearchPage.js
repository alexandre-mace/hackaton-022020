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
        padding: "20px",
        paddingTop: "0",
        paddingBottom: "0"
    },
    fullList: {
        width: 'auto',
    },
    paper: {
        borderTopLeftRadius: "25px",
        borderTopRightRadius: "25px",
        backgroundColor: "#303136",
        color: "white",
        padding: "20px",
        paddingTop: "50px",
        minHeight: "80vh",
        maxWidth: "100vw"
    },
    drawerRoot: {
    }
});

const SearchPage = ({ onBoarding, setOnBoarding, firstOption, setFirstOption, secondOption, setSecondOption, search, setSearch, setCurrentPage }) => {
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
                    <>
                    <div className={"drawer-title"}>
                        - Sélectionnez l'item {currentActionSelection === 'first' ? "1" : "2"} -
                    </div>
                <Autocomplete
                    id="combo-box-demo"
                    open={displayAutocomplete}
                    classes={{
                        option: classes.option,
                        listbox: classes.listbox
                    }}
                    options={data}
                    getOptionLabel={option => option.title}
                    onChange={(event, value) => {
                            if (currentActionSelection === "first") {
                                setFirstOption(value);
                                setDisplayAutocomplete(!displayAutocomplete);
                                setState({ ["bottom"]: false });
                            }
                            if (currentActionSelection === "second") {
                                setSecondOption(value);
                                setDisplayAutocomplete(!displayAutocomplete);
                                setState({ ["bottom"]: false });
                            }
                        }
                    }
                    style={{ width: 300 }}
                    renderInput={params => (
                        <TextField {...params} label="Tapez les 3 premières lettres..." variant="outlined" fullWidth />
                    )}
                />
                </>
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
                    backgroundColor: firstOption.pollutionScore > secondOption.pollutionScore ? "#4B4A4A" : "#4CCE8D",
                    borderWidth: 1,
                    data: [firstOption.pollutionScore * 10]
                },
                {
                    label: 'My First dataset',
                    backgroundColor: secondOption.pollutionScore > firstOption.pollutionScore ? "#4B4A4A" : "#4CCE8D",
                    borderWidth: 1,
                    data: [secondOption.pollutionScore * 10]
                }
            ]
        };
    }

    return (
        <>
            <div className={onBoarding === true ? "onboarding translateX" : "onboarding"}>
                <div className={"onboarding-cross"} onClick={() => setOnBoarding(true)}>
                    &#10005;
                </div>
                <div className={"onboarding-title"}>
                    Bienvenue sur EKO
                </div>
                <div className={"onboarding-text"}>
                    Compare l'impact écologique de tes habitudes numériques.
                </div>
            </div>
            {!search &&
            <div className={"search-wrapper"}>
                <div className={"d-flex flex-column mb-3 align-items-center"}>
                    <div className={"page-title"}>Qui est le moins pire ?</div>
                    <div className={"page-description"}>
                        Sélectionner les items que vous souhaitez comparer dans la liste disponible.
                    </div>
                    <div className={"select-button"} onClick={toggleDrawer('bottom', "first", true)}>
                        {firstOption ? firstOption.title : "Séléctionner l'item 1"}
                    </div>
                    <div className={"text-center mt-3 mb-3"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="46.8" height="36.6" viewBox="0 0 46.8 36.6">
                            <defs>
                                <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                                    <stop offset="0" stopColor="#ff9300" stopOpacity="0.718"/>
                                    <stop offset="1" stopColor="#ffce00"/>
                                </linearGradient>
                            </defs>
                            <g id="vs" transform="translate(-148.2 -548.5)">
                                <path id="Icon_metro-lightning2" data-name="Icon metro-lightning2" d="M14.139,27.3l3.315,3.315-3.315,9.946,9.946-9.946L20.769,27.3l3.315-9.946L14.139,27.3Z" transform="translate(153.225 537.831)" fill="url(#linear-gradient)"/>
                                <text id="V" transform="translate(149 577.3)" fill="#fff" stroke="#fff" strokeWidth="0.8" fontSize="30" fontFamily="Raleway-Bold, Raleway" fontWeight="700"><tspan x="0" y="0">V</tspan></text>
                                <text id="S" transform="translate(176 577)" fill="#fff" fontSize="30" fontFamily="Raleway-Bold, Raleway" fontWeight="700"><tspan x="0" y="0">S</tspan></text>
                            </g>
                        </svg>
                    </div>
                    <div className={"select-button"} onClick={toggleDrawer('bottom', "second", true)}>
                        {secondOption ? secondOption.title : "Sélectionner l'item 2"}
                    </div>
                </div>
                <div className={"d-flex mt-auto justify-content-center w-100"}>
                    <div className={"w-100"}>
                        <Button className={"go-button"} disabled={(!firstOption || !secondOption)} variant="contained" color="primary" onClick={() => setSearch(true)}>
                            Go !
                        </Button>
                    </div>
                </div>

                <Drawer classes={{ paper: classes.paper, root: classes.drawerRoot}} anchor="bottom" open={state.bottom} onClose={toggleDrawer('bottom', false)}>
                    {fullList('bottom')}
                </Drawer>
            </div>
            }
            {search &&
            <div className={"search-wrapper d-flex flex-column align-items-center h-100"}>
                <div onClick={() => setCurrentPage(1)} className={"arrow-back"}><span className={"arrow"}>&#8592;</span> <span className={"back"}>Retour</span></div>
                <div className={"page-title"}>Et le vainqueur est...</div>
                    <div className={"d-flex justify-content-center"}>
                        <div>
                            <Bar
                                data={barData}
                                width={350}
                                height={200}
                                options={{
                                    defaultFontColor: "#fff",
                                    legend: {
                                        display: false,
                                        labels: {
                                            fontColor: "white",
                                            fontSize: 18
                                        }
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
                <div className={"d-flex justify-content-center"}>
                    <div className={"result-action"}>
                        {firstOption.pollutionScore < secondOption.pollutionScore
                            ? <img width={26} height={26} src={"../assets/images/ic_cup-color.png"} />
                            : <img width={23} height={22} src={"../assets/images/finger-color.png"} />
                        }
                        <div>{firstOption.title}</div>
                    </div>
                    <div className={"result-action"}>
                        {secondOption.pollutionScore < firstOption.pollutionScore
                            ? <img width={26} height={26} src={"../assets/images/ic_cup-color.png"} />
                            : <img width={23} height={22} src={"../assets/images/finger-color.png"} />
                        }
                        <div>{secondOption.title}</div>
                    </div>
                </div>
                <div className={"result-card mt-8"}>
                    <div className={"result-card-title"}>
                        {secondOption.pollutionScore < firstOption.pollutionScore
                            ? <img className={"mr-1"} width={26} height={26} src={"../assets/images/ic_cup-color.png"} />
                            : <img className={"mr-1"} width={23} height={22} src={"../assets/images/finger-color.png"} />
                        }
                        {firstOption.title}
                    </div>
                    <div className={"result-card-text"}>{firstOption.text}</div>
                </div>
                <div className={"result-card"}>
                    <div className={"result-card-title"}>
                        {secondOption.pollutionScore > firstOption.pollutionScore
                            ? <img className="mr-1" width={26} height={26} src={"../assets/images/ic_cup-color.png"} />
                            : <img className={"mr-1"} width={23} height={22} src={"../assets/images/finger-white.png"} />
                        }
                        {secondOption.title}
                    </div>
                    <div className={"result-card-text"}>{secondOption.text}</div>
                </div>
                <div>
                    <div className={"result-helper"}>Et si il y avait mieux ?</div>
                    <img className={"mt-3"} width={84} height={70} src={"../assets/images/logo-colors.png"} />
                    <div className={"result-helper-content"}>
                        <div className={"result-helper-title"}>Pour une meilleure alternative</div>
                        <div className={"result-helper-text"}>On te conseille d'essayer Discord</div>
                    </div>

                </div>
                <div className={"d-flex mt-auto justify-content-center w-100"}>
                    <div className={"w-100"}>
                        <Button className={"go-button w-100 mt-3"} variant="contained" color="primary" onClick={() => {
                            setSearch(false)
                            setFirstOption(null)
                            setSecondOption(null)
                        }}>
                            Nouvelle recherche
                        </Button>
                    </div>
                </div>
            </div>

            }
        </>
    )
};
export default SearchPage;