import React from 'react'
import './TicTacToe.css'

const TicTacToe = () => {
  return (
    <div className="container">
        <h1 className='title'>Tic Tac Toe Game In <span>React</span></h1>
        <div className="bord">

        </div>
        <button className="reset">Reset</button>
    </div>
  )
}

export default TicTacToe