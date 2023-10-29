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
  opacity: 0;
  display: none;
  position: absolute;
  background-color: #333;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  white-space: nowrap;
  transition: opacity 250ms ease, transform 250ms ease; /* Add opacity transition */

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

  &.show {
    display: inline;
    opacity: 1;
  }
`;


const StyledTooltipTrigger = styled.span`
  cursor: help;
`;

const Tooltip = ({ message, position, children, style, className }: TooltipProps) => {
  let tooltipTimeout: any;

  const handleMouseEnter = () => {
    clearTimeout(tooltipTimeout);

    tooltipTimeout = setTimeout(() => {
      const tooltipMessage = document.getElementById("tooltip-message");
      if (tooltipMessage) {
        tooltipMessage.style.display = "inline";
        tooltipMessage.classList.add("show");
      }
    }, 800); 
  };

  const handleMouseLeave = () => {
    clearTimeout(tooltipTimeout);

    const tooltipMessage = document.getElementById("tooltip-message");
    if (tooltipMessage) {
      tooltipMessage.classList.remove("show");
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
