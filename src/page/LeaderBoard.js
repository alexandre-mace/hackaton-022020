import React from 'react'
import searchedData from '../data/searchedData.json'
import SearchedCard from '../components/SearchedCard'
import '../assets/styles/leaderBoard.css'

const LeaderBoard = () => {

  return (
    <div className='leaderboard'>
      <h1>LeaderBoard</h1>
      <h2>Ce que vous souhaitez le plus savoir</h2>
      {searchedData.map((item, index) => (
        <SearchedCard key={index} item={item} index={index} />
      ))
      }
    </div>
  )
}

export default LeaderBoard