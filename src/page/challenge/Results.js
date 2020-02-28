import React, { useState, useEffect } from 'react'
import questionData from '../../data/questionData'
import Question from './Question'
import {Bar} from "react-chartjs-2";

const Results = ({goodAnswers, randomUsername, setChallengeStep, setDisplayHeader, setCurrentPage, resetApp}) => {
    let barData = {
        labels: [],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: goodAnswers < 2 ? "#4B4A4A" : "#4CCE8D",
                borderWidth: 1,
                data: [goodAnswers]
            },
            {
                label: 'My First dataset',
                backgroundColor: 2 < goodAnswers ? "#4B4A4A" : "#4CCE8D",
                borderWidth: 1,
                data: [2]
            }
        ]
    };

    return (
        <>
        <div className={"result-title"}>
            Félicitations {goodAnswers > 2 ? randomUsername : "AirPod solitaire"}
        </div>
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
            <div className={"d-flex justify-content-center"}>
                <div className={"result-action"}>
                    {goodAnswers > 2
                        ? <img width={26} height={26} src={"assets/images/ic_cup-color.png"} />
                        : <img width={23} height={22} src={"assets/images/finger-color.png"} />
                    }
                    <div className={"h-50"}>{randomUsername}</div>
                    <div className={"d-flex align-items-center"}>
                        <div style={{ color: goodAnswers < 2 ? "rgba(255,255,255,0.6)" : "white"}} className={"result-number"}>{goodAnswers}</div>
                        <div className={"result-text"}>Bonnes <br/>réponses</div>
                    </div>
                </div>
                <div className={"result-action"}>
                    {goodAnswers < 2
                        ? <img width={26} height={26} src={"assets/images/ic_cup-color.png"} />
                        : <img width={23} height={22} src={"assets/images/finger-color.png"} />
                    }
                    <div className={"h-52"}>AirPod solitaire</div>
                    <div className={"d-flex align-items-center"}>
                        <div style={{ color: goodAnswers > 2 ? "rgba(255,255,255,0.6)" : "white"}} className={"result-number"}>{2}</div>
                        <div className={"result-text"}>Bonnes <br/>réponses</div>
                    </div>
                </div>
            </div>
            <button className='challenge__button mt-8' onClick={() => setChallengeStep(0)}>Recommencez une partie</button>
            <button onClick={() => {
                setDisplayHeader(true)
                resetApp()
            }} className={"challenge__redirect mt-3 d-block m-auto"}>Retour à l'accueil</button>
            </>
    )
}

export default Results