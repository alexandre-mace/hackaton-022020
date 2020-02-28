import React from 'react'

const FriendLink = ({setChallengeStep}) => {
  const onCopyLink = (copy) => {
    document.execCommand(copy)
  }

  return (
    <div className="link h-100">
      <h1 className="link__title">Défie un(e) ami(e) !</h1>

      <p className="link__desc">Testez vous sur 5 questions à propos des impacts de vos habitudes numériques.</p>

      <p>Envoie ce lien à un proche pour pouvoir le défier.</p>

      <div className="link__container">
        <p>https://cutt.ly/Cr4HqEV</p>
        <button className="link__button" onClick={() => onCopyLink('https://cutt.ly/Cr4HqEV')}><img width="19" height="22" src='./../assets/images/ic_copy.png' /></button>
      </div>
      <div className="share"><button className="share__button">Partager le lien</button></div>
      <button className='challenge__button mt-auto' onClick={() => setChallengeStep(2)}>Commencez une partie</button>
    </div>
  )
}

export default FriendLink

