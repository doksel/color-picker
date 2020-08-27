import React, {useState, useEffect} from 'react';

import Modal from "../../common/Modal";
import Slider from "../Slider";

import {rgb2hex,hex2rgb} from "../../../helpers/functions";
import {ColorPickerTypes, CoorsTypes} from "./types";
import {WrapColorPicker, ValueBlock, ColorBlock, SelectBlock} from "./styles";

const ColorPicker: React.FC = () => {
  const [value, setValue]=useState<string>("");
  const [showModal, setShowModal]=useState<boolean>(false);

  useEffect(() => {
    const color = rgb2hex(0,0,0)
    setValue(color)
  }, [])

  return (
    <WrapColorPicker>
      <ValueBlock><div>{value}</div></ValueBlock>
      <ColorBlock color={value}><div></div></ColorBlock>
      <SelectBlock onClick={setShowModal}><div></div></SelectBlock>
      <Modal>
        <Slider color="red"/>
        <Slider color="green"/>
        <Slider color="blue"/>
      </Modal>
    </WrapColorPicker>
    );
}

export default ColorPicker;
