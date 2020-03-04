import React, { useState } from 'react'
import { getDice } from '../../util'
import { StyledApp } from './app.styled'
import { Header } from '../header'


const RollTheDiceApp = () => {
  const [diceList, rollTheDice] = useState(getDice())
  return (
  <StyledApp>
    <Header titleHeader="Let's get cracking, roll it!"/>
    {diceList.map(dice => <div>{dice}</div> )}
  </StyledApp>
  )
}

export { RollTheDiceApp }