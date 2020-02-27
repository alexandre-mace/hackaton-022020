import React, { useState } from 'react'
import '../assets/styles/searchedCard.css'

const SearchedCard = ({ item, index }) => {
  const [active, setActive] = useState(false)

  const onSearchedClick = () => {
    setActive(true)
  }

  return (
    <div className='searchedcard'>
      <button className='searchedcard__button' onClick={() => onSearchedClick()}>
        <div className='searchedcard__wrapper'>
          {!active && <p>{index + 1}</p>}
          <p className='searchedcard__action'>{item.firstAction.title}</p>
          VS
          <p className='searchedcard__action'>{item.secondAction.title}</p>
        </div>
      </button>
    </div>
  )
}

export default SearchedCard
