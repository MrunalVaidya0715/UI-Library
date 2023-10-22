import React, { useState } from "react";
import styled from "styled-components";
import { ToggleButtonProps } from "./Toggle.types";
import { TooltipProps } from "../Tooltip/Tooltip.types";

const StyledToggleButton = styled.div`
  display: flex;
  padding: 0.5rem;
  width: fit-content;
  height: fit-content;
  aspect-ratio: 1;
  border: solid 1px gray;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  transition: all ease-in-out 400ms;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0);
  &:hover {
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  }
`;

const StyledIcon = styled.div<ToggleButtonProps>`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: ${(props) => (props.isActive ? "#22272c" : "#D1D5DB")};
  transition: color 150ms ease-in;
`;

const Toggle = ({ isActive, children }: ToggleButtonProps) => {
  const [isAct, setIsActive] = useState(false);

  const handleToggleClick = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  return (
    <StyledToggleButton
      style={{
        backgroundColor: isAct ? "#eceef1" : "transparent",
        borderColor: isActive ? "#9ba3ab" : "#D1D5DB",
      }}
      onClick={handleToggleClick}
    >
      <StyledIcon isActive={isAct}>{children}</StyledIcon>
    </StyledToggleButton>
  );
};

export default Toggle;
