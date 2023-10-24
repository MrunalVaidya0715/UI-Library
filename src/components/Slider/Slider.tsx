import React, { useState } from "react";
import { SliderProps } from "./Slider.types";
import styled from "styled-components";

const StyledSlider = styled.input`
  width: 100%;
  cursor: pointer;
`;

const Slider = ({
  value,
  maxValue,
  step,
  onChange,
}: SliderProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
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
