import React from "react";

import {PropsTypes} from "./types";
import {Wrapper, ColorBlock} from "./styles";

const DefaultColor: React.FC<PropsTypes> = ({ color = {}, selectColor }) => (
  <Wrapper color={color.value} onClick={selectColor}>
    {color && <label>{color.name}</label>}
    <ColorBlock color={color.value}/>
  </Wrapper>
);

export default DefaultColor;
