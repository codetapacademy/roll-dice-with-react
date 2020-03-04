import React, { useState } from 'react'
import { getDice } from '../../util'
import { RollButton } from '../roll-button'


const DiceList = () => {
  const [diceList, rollTheDice] = useState(getDice())
  return [...diceList.map(dice => <div>{dice}</div>), <RollButton/>]
}

export { DiceList }