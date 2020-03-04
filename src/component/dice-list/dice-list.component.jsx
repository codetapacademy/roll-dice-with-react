import React, { useState } from 'react'
import { getDice } from '../../util'
import { RollButton } from '../roll-button'


const DiceList = () => {
  const [diceList, rollTheDice] = useState(getDice())
  const happenOnClick = () => {
    console.log("what's cracking mate?")
  }
  return [
      ...diceList.map((dice, amMulte) => <div key={amMulte}>{dice}</div>),
      <RollButton key="button" happenOnClick={happenOnClick}/>
  ]
}

export { DiceList }