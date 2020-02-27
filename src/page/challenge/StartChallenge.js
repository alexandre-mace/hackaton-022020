import React from 'react'

const StartChallenge = ({setChallengeStep}) => {
  return (
    <div>
      <h1>Nokia 3310</h1>
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