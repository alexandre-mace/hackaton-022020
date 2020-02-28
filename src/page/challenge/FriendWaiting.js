import React, { useEffect } from 'react'
import '../../assets/styles/quiz.css'

const FriendWaiting = ({setChallengeStep, randomUsername}) => {
  useEffect(() => {
    const timer = setTimeout(() => setChallengeStep(3), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='ta-c'>
      <h1 className='player__name'>{randomUsername}</h1>
      <p className='friend__text'>Vous venez d'inviter un proche</p>
      <div className='circle'>
        <img width='54' height='93' src='../assets/images/Sablier.png' />
      </div>
      <p className='friend__text'>Nous attendons que votre proche rejoigne le défi afin de lancer la partie…</p>
    </div>
  )
}

export default FriendWaiting
