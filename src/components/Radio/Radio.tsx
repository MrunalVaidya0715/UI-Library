import React from 'react';
import styled from 'styled-components';
import { RadioProps } from './Radio.types';
import { TiTick } from 'react-icons/ti';

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 8px;
`;

const RadioInput = styled.input`
  display: none;

  &:checked + .radio-label::before {
    background-color: #007bff;
  }
`;

const RadioCustom = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  border-radius: 50%;
  margin-right: 8px;

  &::before {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    position: absolute;
  }
`;

const Radio = ({ label, value, checked, onChange }: RadioProps) => (
  <RadioLabel className="radio-label">
    <RadioInput type="radio" name={label} value={value} checked={checked} onChange={onChange} />
    <RadioCustom>
      {checked && <TiTick size={18} color="#007bff" />}
    </RadioCustom>
    {label}
  </RadioLabel>
);

export default Radio;
