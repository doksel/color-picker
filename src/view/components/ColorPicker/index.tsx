import React, {useState, useEffect} from 'react';

import {rgb2hex,hex2rgb} from "../../../helpers/functions";
import {ColorPickerTypes, CoorsTypes} from "./types";

const ColorPicker: React.FC = () => {
  const [value, setValue]=useState<string>("");

  useEffect(() => {
    const color = rgb2hex(0,0,0)
    setValue(color)
  }, [])

  return (
    <div>{value}</div>
  );
}

export default ColorPicker;
