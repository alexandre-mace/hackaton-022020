import React, { useState, useEffect } from 'react'
import questionData from '../../data/questionData'
import Question from './Question'
import Results from "./Results";

const Quiz = ({setChallengeStep, setDisplayHeader, randomUsername}) => {
  const [timer, setTimer] = useState(3)
  const [questionStep, setQuestionStep] = useState(0)
  const [goodAnswers, setGoodAnswers] = useState(0)


  useEffect(() => {
    const interval = setInterval(() => {
      if (timer >= 0) {
        setTimer(timer - 1)
      }
      if (timer === 0) {
        setQuestionStep(0)
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div>
      {timer > 0 && (
        <div className='ta-c'>
          <div className='circle'>
            <div className='timer'>{timer}</div>
          </div>
          <div className='friend__text '>Le défi charge</div>
        </div>
      )}
      {timer <= 0 && questionStep >= 0 && questionData.map((question, index) => {
        if (question.step === questionStep) {
          return <Question goodAnswers={goodAnswers} setGoodAnswers={setGoodAnswers} key={index} question={question} setQuestionStep={setQuestionStep} questionCount={questionData.length} />
        }
      })}
      {questionStep > (questionData.length - 1) &&
        <Results goodAnswers={goodAnswers} setDisplayHeader={setDisplayHeader} randomUsername={randomUsername} setChallengeStep={setChallengeStep}/>
      }

    </div>
  )
}

export default Quiz