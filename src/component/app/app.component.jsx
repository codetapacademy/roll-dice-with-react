import React from 'react'
import { StyledApp } from './app.styled'
import { Header } from '../header'
import { DiceList } from '../dice-list'


const RollTheDiceApp = () => {
  return (
  <StyledApp>
    <Header titleHeader="Let's get cracking, roll it!"/>
    <DiceList/>
  </StyledApp>
  )
}

export { RollTheDiceApp }