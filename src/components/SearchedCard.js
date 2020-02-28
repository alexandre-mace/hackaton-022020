import React, { useState } from 'react'
import '../assets/styles/searchedCard.css'

const SearchedCard = ({ item, index, setFirstOption, setSecondOption, setSearch, setCurrentPage }) => {
  const [active, setActive] = useState(false)


  return (
    <div className='searchedcard'>
      <button className='searchedcard__button' onClick={() => {
        setFirstOption(item.firstAction)
        setSecondOption(item.secondAction)
        setSearch(true);
        setCurrentPage(0);
      }}>
        <div className='searchedcard__wrapper'>
          {!active && <span>{index + 1}</span>}
          <p className='searchedcard__action'>{item.firstAction.title}</p>
          <img src="./../assets/images/vs.png" alt=""/>
          <p className='searchedcard__action'>{item.secondAction.title}</p>
        </div>
      </button>
    </div>
  )
}

export default SearchedCard
