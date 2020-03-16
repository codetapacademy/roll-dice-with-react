import React from 'react'
import { StyledRollButton } from './roll.style'
import { StyledRollWrapper } from './roll.style'

const Roll = ({handleOnClick}) => {
  return (
  <StyledRollWrapper>
    <StyledRollButton onClick={handleOnClick}>
      ROLL
    </StyledRollButton>
  </StyledRollWrapper>
  )
}

export { Roll }