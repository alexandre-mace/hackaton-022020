import React from 'react'

const StartChallenge = ({setChallengeStep, setCurrentPage, setDisplayHeader}) => {
  return (
    <div className='ta-c'>
      <div className='player__name'>Nokia 3310</div>
      <div className='friend__text'>Êtes-vous prêt(e) pour ce défi ?</div>
      <div className='circle'>
        <img width='132' height='111' src='../assets/images/logo.png' />
      </div>
      <div>
        <div className='player__name'>AirPod solitaire</div>
        <div className='friend__text'>vient de rejoindre la partie !</div>
      </div>

      <button className='challenge__button mt-8' onClick={() => setChallengeStep(4)}>C'est parti</button>

    </div>
  )
}

export default StartChallenge