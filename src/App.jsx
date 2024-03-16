import { useState } from 'react'
import './css/App.css'
import { PicturePokerProvider } from './components/PicturePokerProvider'
import PictureTypes from './components/PictureTypes'
import PlayerHand from './components/PlayerHand'
import PicturePokerMenu from './components/PicturePokerMenu'
import OpponentHand from './components/OpponentHand'

function App() {


  return (
    <>
    <div>
      <PicturePokerMenu />
      <PicturePokerProvider>
        <PictureTypes />           
        <PlayerHand />
        <OpponentHand />
      </PicturePokerProvider>
    </div>
    </>
  )
}

export default App
