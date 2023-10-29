import React from "react";
import styled from "styled-components";
import { InputProps } from "./Input.types";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { MdTextFields } from "react-icons/md";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: start;
  justify-content: center;
  gap: 0.2rem;
`;
const StyledInputContainer = styled.div`
  overflow: hidden;
  display: flex;
  height: 2rem;
  width: 100%;
  border-radius: 8px;
  border: solid 2px;
  &:focus {
    border: solid 2px #1b116e;
  }
  &:not(:focus) {
    border-color: "#1b116e";
  }
  background-color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;

const StyledInput = styled.input<InputProps>`
  /* padding: 0.2rem 0.4rem; */
  height: 2rem;
  width: 100%;
  border-radius: 8px;
  outline: none;
  border: 0;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "auto")};
`;

const Seperator = styled.div`
  height: 70%;
  width: 1px;
  background-color: lightgray;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
`;
const StyledMark = styled.span`
  color: red;
`;
const StyledIcon = styled.div<InputProps>`
  color: ${(props) =>
    props.disabled ? "#e4e3ea" : "#080808"};
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "auto")};
`;

const StyledLabel = styled.div<InputProps>`
  font-size: 1rem;
  color: ${(props) =>
    props.disabled ? "#e4e3ea": "#080808"};
`;

const StyledText = styled.p<InputProps>`
  margin: 0px;
  color: ${(props) =>
    props.disabled ? "#e4e3ea" : "#080808"};
`;

const Input = ({
  id,
  disabled,
  label,
  isMandtory,
  onChange,
  placeholder,
  style,
  className,
  type,
  ...props
}: InputProps) => {
  return (
    <StyledContainer style={style} className={className}>
      <StyledLabel>
        <StyledText disabled={disabled}>
          {label}
          {isMandtory && <StyledMark>*</StyledMark>}
        </StyledText>
      </StyledLabel>
      <StyledInputContainer>
        <StyledIcon disabled={disabled}>
          {type === "email" ? (
            <HiOutlineMail />
          ) : type === "number" ? (
            <AiOutlineFieldNumber />
          ) : (
            <MdTextFields />
          )}
        </StyledIcon>
        <Seperator />
        <StyledInput
          id={id}
          type={type || "text"}
          onChange={onChange}
          disabled={disabled}

          placeholder={placeholder}
          {...props}
        ></StyledInput>
      </StyledInputContainer>
    </StyledContainer>
  );
};

export { Input };
