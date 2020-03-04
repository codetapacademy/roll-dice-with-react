import React, { useState } from 'react'
import { getDice } from '../../util'
import { RollButton } from '../roll-button'
import { DiceView } from '../dice-view'


const DiceList = () => {
  const [diceList, rollTheDice] = useState(getDice())
  const happenOnClick = () => {
    console.log("what's cracking mate?")
  }
  return [
      ...diceList.map((dice, amMulte) => <DiceView key={amMulte}>{dice}</DiceView>),
      <RollButton key="button" happenOnClick={happenOnClick}/>
  ]
}

export { DiceList }