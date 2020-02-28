import React from 'react'

const StartChallenge = ({setChallengeStep, randomUsername}) => {
  return (
    <div>
      <h1>{randomUsername}</h1>
      <p>Êtes-vous prêt(e) pour ce défi ?</p>

      <div>
        <p>AirPod solitaire</p>
        <p>vient de rejoindre la partie</p>
      </div>

      <button onClick={() => setChallengeStep(4)}>C'est parti</button>

    </div>
  )
}

export default StartChallenge