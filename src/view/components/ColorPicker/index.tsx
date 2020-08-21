import React, {useState, useEffect} from 'react';

import {rgb2hex,hex2rgb} from "../../../helpers/functions";
import {ColorPickerTypes, CoorsTypes} from "./types";
import {WrapColorPicker, ValueBlock, ColorBlock, SelectBlock} from "./styles";

const ColorPicker: React.FC = () => {
  const [value, setValue]=useState<string>("");

  useEffect(() => {
    const color = rgb2hex(0,0,0)
    setValue(color)
  }, [])

  return (
    <WrapColorPicker>
      <ValueBlock><div>{value}</div></ValueBlock>
      <ColorBlock><div></div></ColorBlock>
      <SelectBlock><div></div></SelectBlock>
    </WrapColorPicker>
    );
}

export default ColorPicker;
