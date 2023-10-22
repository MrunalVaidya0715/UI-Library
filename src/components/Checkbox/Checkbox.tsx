import React, { useState } from 'react';
import styled from 'styled-components';
import { CheckboxProps } from './Checkbox.types';

const CheckboxLabel = styled.label`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;
  width: fit-content;
  padding: 0.2rem;
`;

const CheckboxInput = styled.input`
  cursor: pointer;
  width: 1.2rem;
  height: 1.2rem;
`;

const CheckboxText = styled.span`
  cursor: pointer;
`;

const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    if (onChange) {
      onChange(newCheckedState); 
    }
  };

  return (
    <CheckboxLabel onChange={handleCheckboxChange}>
      <CheckboxInput
        type="checkbox"
        checked={isChecked} 
      />
      <CheckboxText>{label}</CheckboxText>
    </CheckboxLabel>
  );
};

export {Checkbox};
