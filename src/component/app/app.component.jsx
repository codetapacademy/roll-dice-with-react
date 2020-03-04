import React, { useState } from 'react'
import { getDice } from '../../util'
import { StyledApp } from './app.styled'


const RollTheDiceApp = () => {
  const [diceList, rollTheDice] = useState(getDice())
  return (
  <StyledApp>
    <h1>
      Let's get cracking, roll it!
    </h1>
    {diceList.map(dice => <div>{dice}</div> )}
  </StyledApp>
  )
}

export { RollTheDiceApp }