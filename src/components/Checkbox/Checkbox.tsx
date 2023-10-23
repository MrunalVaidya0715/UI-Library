import React, { useState } from "react";
import styled from "styled-components";
import { CheckboxProps } from "./Checkbox.types";

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

const Checkbox = ({
  label,
  checked,
  onChange,
  style,
  className,
  ...props
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    if (onChange) {
      onChange(newCheckedState);
    }
  };

  return (
    <CheckboxLabel
      style={style}
      className={className}
      onChange={handleCheckboxChange}
      {...props}
    >
      <CheckboxInput
        style={style}
        className={className}
        type="checkbox"
        checked={isChecked}
        {...props}
      />
      <CheckboxText  style={style} className={className} {...props}>{label}</CheckboxText>
    </CheckboxLabel>
  );
};

export { Checkbox };
