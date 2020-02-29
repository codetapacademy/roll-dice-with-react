import React from "react";
import { StyledRollButton, StyledRollWrapper } from "./roll.style";

const Roll = ({ handleClick }) => {
  return (
    <StyledRollWrapper>
      <StyledRollButton onClick={handleClick}>Roll</StyledRollButton>
    </StyledRollWrapper>
  );
};

export { Roll };
