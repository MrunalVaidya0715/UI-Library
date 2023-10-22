import React, { useState } from "react";
import styled from "styled-components";

const StyledSwitch = styled.label`
  position: relative;
  display: flex;
  width: 3rem;
  height: 1.5rem;
  border: 1px solid #9CA3AF;
  overflow: hidden;
  border-radius: 12px;
  justify-content: space-between;
`;

const StyledTrack = styled.div`
  position: absolute;
  z-index: 1;
  
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  width: 60%;
  height: 100%;
  border-radius: 12px;
  transition: all 150ms ease-in;
`;

const StyledInput = styled.input`
  position: absolute;
  z-index: 2;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const Switch = () => {
  const [isActive, setIsActive] = useState(false);

  const handleSwitchChange = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  return (
    <StyledSwitch style={{ backgroundColor: isActive ? "#0e6bf5":"#D1D5DB"}} onClick={handleSwitchChange}>
      {
        isActive? <StyledTrack style={{right:"0"}}  />: <StyledTrack style={{left:"0"}}  />
      }
      <StyledInput type="checkbox" checked={isActive} readOnly />
    </StyledSwitch>
  );
};

export default Switch;
