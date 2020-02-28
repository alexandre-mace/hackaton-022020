import React, { useState } from 'react'
import '../../assets/styles/challenge.css'
import FriendLink from './FriendLink'
import FriendWaiting from './FriendWaiting'
import StartChallenge from './StartChallenge'
import Quiz from './Quiz'

const Challenge = ({setDisplayHeader, randomUsername}) => {
  const [challengeStep, setChallengeStep] = useState(0)

  const onChallengeStart = (stepNumber) => {
    console.log(stepNumber)
    setChallengeStep(stepNumber)
    setDisplayHeader(false)
  }

  return (
    <div className='challenge'>
      {challengeStep === 0 && (
        <>
          <h1>Tous les défis</h1>
          <div className='challenge__section'>
            <h2>Défiez un ami</h2>
            <p>Lien maggle</p>
            <button onClick={() => onChallengeStart(1)}>
              <p>Génerer un lien</p>
            </button>
          </div>
          <div className='challenge__section'>
            <h2>Personne à défier</h2>
            <p>Jouez contre vous même</p>
            <button onClick={() => onChallengeStart(3)}>
              <p>Je joue solo</p>
            </button>
          </div>
        </>
      )}
      {challengeStep === 1 && (
        <FriendLink setChallengeStep={setChallengeStep} />
      )}
      {challengeStep === 2 && (
        <FriendWaiting setChallengeStep={setChallengeStep} randomUsername={randomUsername}/>
      )}
      {challengeStep === 3 && (
        <StartChallenge setChallengeStep={setChallengeStep} randomUsername={randomUsername}/>
      )}
      {challengeStep === 4 && (
        <Quiz setChallengeStep={setChallengeStep} randromUsername={randomUsername}/>
      )}
    </div>
  )
}

export default Challenge
