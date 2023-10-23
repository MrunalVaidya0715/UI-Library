import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { PasswordProps } from "./Password.types";
import styled from "styled-components";

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

const StyledInput = styled.input`
  height: 100%;
  width: 100%;
  border-radius: 8px;
  outline: none;
  border: 0;
`;

const StyledLabel = styled.div`
  font-size: 1rem;
  color: "#080808";
`;

const StyledText = styled.p`
  margin: 0px;
  color: "#080808";
`;

const StyledEye = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  outline: none;
`;

const Password = ({
  placeholder,
  onChange,
  style,
  className,
  ...props
}: PasswordProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <StyledContainer style={style} className={className} {...props}>
      <StyledLabel>
        <StyledText>Password</StyledText>
      </StyledLabel>
      <StyledInputContainer>
        <StyledInput
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          style={style}
          className={className}
          {...props}
          onChange={(e) => onChange}
        />
        <StyledEye onClick={togglePasswordVisibility}>
          {showPassword ? (
            <AiFillEyeInvisible size={18} />
          ) : (
            <AiFillEye size={18} />
          )}
        </StyledEye>
      </StyledInputContainer>
    </StyledContainer>
  );
};

export { Password };
