import { useState } from 'react'
import './css/App.css'
import { PicturePokerProvider } from './components/PicturePokerProvider'
import PictureTypes from './components/PictureTypes'
import PlayerHand from './components/PlayerHand'
import PicturePokerMenu from './components/PicturePokerMenu'

function App() {


  return (
    <>
    <div>
      <PicturePokerMenu />
      <PicturePokerProvider>
        <PictureTypes />
        
        <PlayerHand />
      </PicturePokerProvider>
    </div>
    </>
  )
}

export default App
