import React, { useState } from "react";
import styled,{css, keyframes} from "styled-components";
import { SwitchProps } from "./Switch.types";


const StyledSwitch = styled.label<SwitchProps>`
  position: relative;
  display: flex;
  align-items: center;
  width: 3rem;
  height: 1.5rem;
  border: 1px solid #9CA3AF;
  background-color: ${(props)=>props.isChecked ?"#5c94e9":"#D1D5DB"};
  overflow: hidden;
  border-radius: 12px;
  justify-content: space-between;
  transition:  all 250ms ease-in-out;
`;

const grow = keyframes`
  0% {
    width: 20%;
  }
  25% {
    width: 30%;
    border-radius: 20%;
  }
  100% {
    width: 20%;
  }
`;

const shrink = keyframes`
  0% {
    width: 20%;
    
  }
  75% {
    width: 30%;
    border-radius: 20%;
  }
  100% {
    width: 20%;
  }
`;

const StyledTrack = styled.div<SwitchProps>`
  position: absolute;
  z-index: 1;
  animation: ${(props) => (props.isChecked ? grow : shrink)} 250ms ease-in-out;
  transform: translateX(${(props) => (props.isChecked ? "195%" : "35%")});
  transition:  all 250ms ease-in-out; 
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  background-color: ${(props)=>props.isChecked ?"white":"transparent"};
  width: 20%;
  height: 40%;
  border-radius: 50%;
  border: 3px solid white;
`;

const StyledInput = styled.input<SwitchProps>`
  position: absolute;
  z-index: 2;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: ${(props) => (props.isDisabled ? "not-allowed" : "pointer")};
`;

const Switch = ({ isChecked, isDisabled }: SwitchProps) => {
  const [isActive, setIsActive] = useState(isChecked);

  const handleSwitchChange = () => {
    if (!isDisabled) {
      setIsActive((prevIsActive) => !prevIsActive);
    }
  };

  return (
    <StyledSwitch isChecked={isActive} onClick={handleSwitchChange}>
      <StyledTrack isChecked={isActive} />
      <StyledInput isChecked={isActive} isDisabled={isDisabled} checked={isActive} readOnly disabled={isDisabled} />
    </StyledSwitch>
  );
};

export { Switch };
