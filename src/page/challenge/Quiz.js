import React, { useState, useEffect } from 'react'
import questionData from '../../data/questionData'
import Question from './Question'

const Quiz = () => {
  const [timer, setTimer] = useState(3)
  const [questionStep, setQuestionStep] = useState(-1)


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
      {timer > 0 && <p>{timer}</p>}
      {timer <= 0 && questionStep >= 0 && questionData.map((question, index) => {
        if (question.step === questionStep) {
          return <Question key={index} question={question} setQuestionStep={setQuestionStep} questionCount={questionData.length} />
        }
        return
      })}

    </div>
  )
}

export default Quiz