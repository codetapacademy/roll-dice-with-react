import React, { useState } from 'react'
import { getDice } from '../../util'


const RollTheDiceApp = () => {
  const [diceList, rollTheDice] = useState(getDice())
  return (
  <div>
    <h1>
      Let's get cracking, roll it!
      {diceList.map(dice => <div>{dice}</div> )}
    </h1>
  </div>
  )
}

export { RollTheDiceApp }