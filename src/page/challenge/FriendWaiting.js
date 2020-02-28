import React, { useEffect } from 'react'

const FriendWaiting = ({setChallengeStep, randomUsername}) => {
  useEffect(() => {
    const timer = setTimeout(() => setChallengeStep(3), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>{randomUsername}</h1>
      <p>Vous venez d'inviter un proche</p>
      <div />
      <p>Nous attendons que votre proche rejoigne le défi afin de lancer la partie…</p>
    </div>
  )
}

export default FriendWaiting
