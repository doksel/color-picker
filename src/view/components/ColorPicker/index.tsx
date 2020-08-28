import React, {useState, useEffect} from 'react';

import Modal from "../../common/Modal";
import Slider from "../Slider";
import DefaultColor from "../DefaultColor";
import Button from "../../common/Button";

import {rgb2hex,hex2rgb} from "../../../helpers/functions";
import {sliderColors} from "../../../helpers/values";

import {ColorPickerTypes, ColorsTypes} from "./types";
import {WrapColorPicker, ValueBlock, ColorBlock, SelectBlock, WrapButton} from "./styles";

const ColorPicker: React.FC<ColorPickerTypes> = ({value, colors, onChange}) => {
  const [selectedValue, setSelectedValue]=useState<string>("");
  const [showModal, setShowModal]=useState<boolean>(false);
  const [showDefaultColors, setShowDefaultColors]=useState<boolean>(false);

  useEffect(() => {
    setSelectedValue(value)
  }, [])

  const handleSelectColor = (color: string) => {
    setSelectedValue(color);
    setShowDefaultColors(false);
  }

  const handleSuccess = () => {
    setShowModal(false);
  }

  const handleChangeSlider = (value: number) => {
    console.log(value)
  }

  return (
    <WrapColorPicker>
      <ValueBlock><div>{selectedValue}</div></ValueBlock>
      <ColorBlock color={selectedValue} onClick={()=>setShowModal(!showModal)}><div></div></ColorBlock>
      <SelectBlock onClick={()=>setShowDefaultColors(!showDefaultColors)}><div></div></SelectBlock>

      {showModal && 
        <Modal>
          {sliderColors.map((color, index) => (
            <Slider color={color} key={index} onChange={(value)=>handleChangeSlider(value)}/>
          ))}

          <WrapButton>
            <Button text="cancel" type="danger" onClick={()=>setShowModal(false)}/>
            <Button text="ok" type="primary" onClick={handleSuccess}/>
          </WrapButton>
        </Modal>
      }

      {showDefaultColors && 
        <Modal>
          {colors.map((color: ColorsTypes, index: number) => (
            <DefaultColor color={color} key={index} selectColor={()=>handleSelectColor(color.value)}/>
          ))}
        </Modal>
      }
    </WrapColorPicker>
    );
}

export default ColorPicker;
