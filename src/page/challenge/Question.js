import React, { useState, useEffect } from 'react'

const Question = ({question, setQuestionStep, questionCount}) => {
  const [selected, setSelected] = useState(null)
  const [questionTimer, setQuestionTimer] = useState(10)
  const [showAnswerTimer, setShowAnswerTimer] = useState(6)


  useEffect(() => {
    const interval = setInterval(() => {
      if (questionTimer > 0) {
        setQuestionTimer(questionTimer - 1)
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [questionTimer]);

  useEffect(() => {
    if (questionTimer === 0) {
      console.log()
      const interval = setInterval(() => {
        if (showAnswerTimer >= 0) {
          setShowAnswerTimer(showAnswerTimer - 1)
        }
        if (showAnswerTimer === 0) {
          setQuestionStep(question.step + 1)
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [showAnswerTimer, questionTimer]);

  return (
    <div>
            {questionTimer > 0 && <p>{questionTimer}</p>}
            {questionTimer === 0 &&
            <>
                        {showAnswerTimer > 0 && <p>{showAnswerTimer}</p>}
                        </>

            }

      <p>Question {question.step + 1} / {questionCount} </p>
      <p>{question.text}</p>
      <div>
        {question.answers.map((answer, index) => (
          <button 
          key={index}
          className={selected === answer.text 
            ? questionTimer === 0 
                ? answer.isTrue 
                    ? 'answer-selected answer-true'
                    : 'answer-selected answer-false'
                : 'answer-selected' 
            : ''}
             onClick={() => setSelected(answer.text)}>
            <p>{answer.text}</p>
          </button>
        ))}
      </div>
      {/* <button onClick={() => setQuestionStep(question.step + 1)}>Next</button> */}
    </div>
  )
}

export default Question