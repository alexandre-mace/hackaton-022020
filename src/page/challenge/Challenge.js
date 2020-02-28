import React, { useState, useEffect } from 'react'
import '../../assets/styles/challenge.css'
import FriendLink from './FriendLink'
import FriendWaiting from './FriendWaiting'
import StartChallenge from './StartChallenge'
import Quiz from './Quiz'

const Challenge = ({setDisplayHeader, randomUsername, setCurrentPage, resetApp}) => {
  const [challengeStep, setChallengeStep] = useState(0);

  const onChallengeStart = (stepNumber) => {
    if (stepNumber > 1) {
      setDisplayHeader(false)
    }
    setChallengeStep(stepNumber)
    
  }

  return (
    <div className='challenge'>
      {challengeStep === 0 && (
        <>
          <h1 className="challenge__title">Tous les défis</h1>
          <div className='challenge__section'>
            <h2 className='challenge__subtitle'>Défie un(e) ami(e) !</h2>
            <p className='challenge__text'>Vous allez pouvoir vous défier grâce à 5 questions du numérique.</p>
            <button className='challenge__button' onClick={() => onChallengeStart(1)}>
              J'invite un(e) ami(e)
            </button>
          </div>
          <div className='challenge__section'>
            <h2 className='challenge__subtitle'>Personne à défier ?</h2>
            <p className='challenge__text'>Joue contre toi-même pour apprendre plus de bonnes pratiques.</p>
            <button className='challenge__button' onClick={() => onChallengeStart(3)}>
              Je joue solo
            </button>
          </div>
          <div className="challenge__bottom">
            <button className="challenge__redirect" onClick={() => resetApp()}>Retourner au comparateur</button>
          </div>
        </>
      )}
      {challengeStep === 1 && (
        <FriendLink setChallengeStep={onChallengeStart} setCurrentPage={setCurrentPage} setDisplayHeader={setDisplayHeader} />
      )}
      {challengeStep === 2 && (
        <FriendWaiting setChallengeStep={setChallengeStep} randomUsername={randomUsername}/>
      )}
      {challengeStep === 3 && (
        <StartChallenge setChallengeStep={setChallengeStep} randomUsername={randomUsername}/>
      )}
      {challengeStep === 4 && (
        <Quiz resetApp={resetApp} setCurrentPage={setCurrentPage} setDisplayHeader={setDisplayHeader} setChallengeStep={setChallengeStep} randomUsername={randomUsername}/>
      )}
    </div>
  )
}

export default Challenge
