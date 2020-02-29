import React from "react";
import { render } from "react-dom";
import { RollDiceApp } from "./component/app";

const reactWillRenderHere = document.querySelector("#roll-dice");
render(<RollDiceApp />, reactWillRenderHere);
