import React, { useState, useEffect, useMemo } from "react";
import ReactSlider from "react-slider";

import {WrapSlider, Scale, } from "./styles";
import {PropsTypes} from "./types";

const Slider: React.FC<PropsTypes> = ({ color, label, step = 1, min = 0, max = 255, withoutThumb = false, onChange }) => {
  const [value, setValue] = useState(min);
  const scale = useMemo(() =>
    new Array(1 + max - min).fill(0).map((el, index) => (el = index)), []
  );

  useEffect(() => {
    // onChange && onChange(value)
  }, [value]);

  return (
    <WrapSlider color={color}>
      {label && <label>{label}</label>}
      {withoutThumb && (
        <Scale>
          {scale.map((item, index) => {
            return <span key={index}>{item}</span>;
          })}
        </Scale>
      )}
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="thumb"
        trackClassName="track"
        min={min}
        max={max}
        step={step}
        renderThumb={(props: any, state: any) => {
          setTimeout(() => {
            setValue(state.valueNow);
          });
          return <div {...props}>{state.valueNow}</div>;
        }}
      />
    </WrapSlider>
  );
};

export default Slider;
