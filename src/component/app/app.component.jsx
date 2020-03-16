import React from 'react'
import { StyledApp } from './app.style'
import { Title } from '../title'
import { DiceList } from '../dice-list'
// import { Roll } from '../roll'

const RollDiceApp = () => {
  return (
    <StyledApp>
      <Title titleText="Roll the dice"/>
      <DiceList />
    </StyledApp>
  )
}

export { RollDiceApp }