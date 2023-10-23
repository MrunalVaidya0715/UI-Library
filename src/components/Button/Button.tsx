import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledDiv = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 100%;
  background-color: #5755c794;
  transition: width 250ms ease-in-out 150ms;
  mix-blend-mode:overlay;
`;

const StyledButton = styled.button<ButtonProps>`
  position: relative;
  border: 0;
  overflow: hidden;
  line-height: 1;
  font-size: ${(props) => (props.size === "small"? "0.8rem" :props.size === "medium" ? "1rem" : props.size === "large" ?  "1.2rem": "0.8rem")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-weight: 400;
  border-radius: 5px;
  border: solid 1px  ${(props) => (props.disabled ? "#474040f0" : "#271d7fd3")};;
  display: inline-block;
  padding: ${(props) =>
    props.size === "small"
      ? "0.4rem"
      : props.size === "medium"
      ? "0.6rem" : props.size === "large" ? "1rem 1.2rem"
      : "0.8rem"};
  color: ${(props) => (props.primary ? "#fff" : props.disabled? "gray": "#000")};
  background-color: ${(props) => (props.primary ? "#a59dec" : "transparent")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  transition: all 400ms ease-in-out 100ms;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  

  &:hover {
    
    background-color: ${(props) =>
      props.primary ? "#7e73e1" : props.disabled ? "#594d4d47" : "#7e73e1"};
    box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    color: ${(props) => (props.primary ? "#000" : "#fff")};
    
  }

  &:active {
    border: solid 2px #271d7fd3;
    box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.4);
  }

  &:hover ${StyledDiv} {
    width: ${(props) => (props.disabled ? "0" : "100%")};
  }
`;

const Button = ({
  size,
  primary,
  disabled,
  text,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      primary={primary}
      disabled={disabled}
      size={size}
      {...props}
    >
      {text}
      <StyledDiv></StyledDiv>
    </StyledButton>
  );
};

export {Button};
