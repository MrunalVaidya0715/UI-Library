import React from "react";
import styled from "styled-components";
import { TooltipProps } from "./Tooltip.types";

const StyledTooltip = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  user-select: none;
`;

const StyledTooltipMessage = styled.span<TooltipProps>`
  display: none;
  position: absolute;
  background-color: #333;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  white-space: nowrap;

  ${({ position }) => {
    if (position === "top") {
      return `
        bottom: 120%;
        left: 50%;
        transform: translateX(-50%);
      `;
    } else if (position === "bottom") {
      return `
        top: 120%;
        left: 50%;
        transform: translateX(-50%);
      `;
    } else if (position === "left") {
      return `
        top: 50%;
        right: 120%;
        transform: translateY(-50%);
      `;
    } else if (position === "right") {
      return `
        top: 50%;
        left: 120%;
        transform: translateY(-50%);
      `;
    }
  }}
`;

const StyledTooltipTrigger = styled.span`
  cursor: help;
`;

const Tooltip = ({ message, position, children, style, className }: TooltipProps) => {
  const handleMouseEnter = () => {
    const tooltipMessage = document.getElementById("tooltip-message");
    if (tooltipMessage) {
      tooltipMessage.style.display = "inline";
    }
  };

  const handleMouseLeave = () => {
    const tooltipMessage = document.getElementById("tooltip-message");
    if (tooltipMessage) {
      tooltipMessage.style.display = "none";
    }
  };

  return (
    <StyledTooltip
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={className}
    >
      <StyledTooltipTrigger>{children}</StyledTooltipTrigger>
      <StyledTooltipMessage id="tooltip-message" position={position}>
        {message}
      </StyledTooltipMessage>
    </StyledTooltip>
  );
};

export {Tooltip};
