import React, { useState } from 'react'
import { getDice } from '../../util'


const DiceList = () => {
  const [diceList, rollTheDice] = useState(getDice())
  return diceList.map(dice => <div>{dice}</div> )
}

export { DiceList }