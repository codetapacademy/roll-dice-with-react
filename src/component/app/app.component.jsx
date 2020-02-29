import React from "react";
import { StyledRollDiceWrapper } from "./app.style";
import { Title } from "../title";
import { DiceList } from "../dice-list/dice-list.component";

const RollDiceApp = () => {
  return (
    <StyledRollDiceWrapper>
      <Title titleText="Roll the Dice" />
      <DiceList />
    </StyledRollDiceWrapper>
  );
};

export { RollDiceApp };
