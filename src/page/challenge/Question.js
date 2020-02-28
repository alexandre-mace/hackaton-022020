import React, { useState, useEffect } from 'react'

const Question = ({question, setQuestionStep, questionCount, friendUsername}) => {
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
      <p className='question-step'>Question {question.step + 1} / {questionCount} </p>
      <p className='question-title'>{question.text}</p>
      <div className='stepper'>
        <span className='stepper-line' style={{width: (10-questionTimer)*10 + '%'}} />
      </div>
      <div className='mt-3'>
        {question.answers.map((answer, index) => (
          <button 
          key={index}
          className={selected === answer.text 
            ? questionTimer === 0 
                ? answer.isTrue 
                    ? answer.hasFriendAnswered
                          ? 'default-answer answer-selected answer-true friend-answer'
                          : 'default-answer answer-selected answer-true'
                    : answer.hasFriendAnswered
                          ? 'default-answer answer-selected answer-false friend-answer'
                          : 'default-answer answer-selected answer-false'
                : 'default-answer answer-selected'
            : questionTimer === 0
              ? answer.isTrue
                ? answer.hasFriendAnswered
                  ? 'default-answer answer-was-true friend-answer'
                  : 'default-answer answer-was-true'
                : answer.hasFriendAnswered
                  ? 'default-answer friend-answer'
                  : 'default-answer' 
              : 'default-answer'
            }
             onClick={() => setSelected(answer.text)}>
            <p>{answer.text}</p>
          </button>
        ))}
      </div>
      {questionTimer === 0 && (
        <div className='info'>
          <img width={86} height={72} src='../assets/images/logo.png' />
          <div className='info-content'>
            {questionTimer === 0 && showAnswerTimer > 0 && <p className='answertimer'>{showAnswerTimer}</p>}
            <div className='info-bravo'>Bravo !</div>
            <div className='info-text'>Un tweet ne consomme que 0,02g de CO2</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Question