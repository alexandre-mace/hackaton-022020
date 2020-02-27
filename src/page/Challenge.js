import React from 'react'
import '../assets/styles/challenge.css'

const Challenge = () => {
  return (
    <div className='challenge'>
      <h1>Tous les défis</h1>
      <div className='challenge__section'>
        <h2>Défiez un ami</h2>
        <p>Lien maggle</p>
        <button>
          <p>Génerer un lien</p>
        </button>
      </div>
      <div className='challenge__section'>
        <h2>Personne à défier</h2>
        <p>Jouez contre vous même</p>
        <button>
          <p>Je joue solo</p>
        </button>
      </div>
    </div>
  )
}

export default Challenge
