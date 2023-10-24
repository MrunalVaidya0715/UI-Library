import React from "react";
import styled from "styled-components";
import { InputProps } from "./Input.types";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: start;
  justify-content: center;
  gap: 0.2rem;

`

const StyledInput = styled.input<InputProps>`
  /* padding: 0.2rem 0.4rem; */
  height: 2rem;
  width: 100%;
  border-radius: 8px;
  border: solid 2px
    ${(props) =>
      props.disabled
        ? "#e4e3ea"
        : props.error
        ? "#a9150b"
        : props.success
        ? "#067d68"
        : "#353637"};
  background-color: #fff;
  &:focus {
    border: solid 2px #1b116e;
  }
  &:not(:focus){
    border-color: ${(props)=>props.disabled?"":"#1b116e"} ;
  }
  cursor: ${(props) => (props.disabled ? "not-allowed" : "auto")};
`;

const StyledLabel = styled.div<InputProps>`
  font-size: 1rem;
  color: ${(props) => (props.disabled ? "#e4e3ea" : props.success?"#73d44c": "#080808")};
  
`;

const StyledMessage = styled.div<InputProps>`
  font-size: 1rem;
  color: #9150b8;
`;

const StyledText = styled.p<InputProps>`
  margin: 0px;
  color: ${(props) =>
    props.disabled ? "#e4e3ea" : props.error ? "#a9150b" : "#080808"};
`;



const Input= ({
  id,
  disabled,
  label,
  message,
  error,
  success,
  onChange,
  placeholder,
  style,
  className,
  type,
  ...props
}:InputProps) => {
  return (
    <StyledContainer style={style} className={className} >
      <StyledLabel>
        <StyledText disabled={disabled} error={error}>
          {label}
        </StyledText>
      </StyledLabel>
      <StyledInput
        id={id}
        type={type || "text"}
        onChange={onChange}
        disabled={disabled}
        error={error}
        success={success}
        placeholder={placeholder}
        {...props}></StyledInput>
      <StyledMessage>
        <StyledText error={error}>{message}</StyledText>
      </StyledMessage>
    </StyledContainer>
  );
};

export {Input};