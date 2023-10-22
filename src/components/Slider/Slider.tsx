import React, { useState } from "react";
import { SliderProps } from "./Slider.types";
import styled from "styled-components";

const StyledSlider = styled.input`
  width: 100%;
  cursor: pointer;
`;

const Slider = ({
  defaultValue,
  maxValue,
  step,
  onChange,
}: SliderProps) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <StyledSlider
      type="range"
      value={value}
      min={0}
      max={maxValue}
      step={step}
      onChange={handleChange}
    />
  );
};

export {Slider};
