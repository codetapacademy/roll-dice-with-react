import React from 'react'
import { StyledDiceView, StyledDiceContainer } from './dice-view.styled'

const DiceView = ({children}) => {
  return (
    <StyledDiceContainer>
      <StyledDiceView className={`dice dice-${children}`}/>
    </StyledDiceContainer>
  )
  }

export { DiceView } 