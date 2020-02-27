import React from 'react'

const FriendLink = ({setChallengeStep}) => {
  const onCopyLink = () => {
    document.execCommand("copy")
  }

  return (
    <div>
      <h1>Défiez un ami</h1>

      <p>Testez vous sur 10 questions à propos des impacts de vos habitudes numériques.</p>

      <div>
        <p>exempledelien</p>
        <button onClick={() => onCopyLink()}>Copy</button>
      </div>
      <p>Envoyez ce lien à un proche pour pouvoir le défier.</p>
      <div><button>Envoyez</button></div>
      <div><button onClick={() => setChallengeStep(2)}>Commencez une partie</button></div>
    </div>
  )
}

export default FriendLink
