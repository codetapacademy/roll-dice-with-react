import React from 'react'
import { StyledRollButton, StyledRollContainer } from './roll-button.styled'

const RollButton = ({happenOnClick}) => {
  return (
    <StyledRollContainer>
      <StyledRollButton onClick={happenOnClick}>
        Roll
      </StyledRollButton>
    </StyledRollContainer>
  )
}

export { RollButton }