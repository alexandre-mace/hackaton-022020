import React from 'react'
import searchedData from '../data/searchedData.json'
import SearchedCard from '../components/SearchedCard'
import '../assets/styles/leaderBoard.css'

const LeaderBoard = (props) => {

  return (
    <div className='leaderboard'>
    <div className={"page-title w-100"}>Vous êtes nombreux à comparer...</div>
      {searchedData.map((item, index) => (
        <SearchedCard key={index} item={item} index={index} {...props} />
      ))
      }
    </div>
  )
};

export default LeaderBoard