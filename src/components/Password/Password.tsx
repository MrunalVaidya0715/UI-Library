import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { PasswordProps } from "./Password.types";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 0.5rem;
  outline: none;
  border: 0;
`;

const StyledLabel = styled.div`
  font-size: 1rem;
  color: "#080808";
  padding-bottom: 6px;
`;

const StyledText = styled.p`
  margin: 0px;
  color: "#080808";
`;

const StyledEye = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
`

const StyledContainer = styled.div`
  overflow: hidden;
  height: 2rem;
  width: fit-content;
  border-radius: 8px;
  border: solid 1px #353637; 
  background-color: #fff;
  cursor: pointer;
  display: flex;
  width: fit-content;
  justify-content: space-between;
  align-items: center;
  
`;

const Password = ({ placeholder, onChange, ...props }: PasswordProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <StyledLabel>
        <StyledText>Password</StyledText>
      </StyledLabel>
      <StyledContainer>
        <StyledInput
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          {...props}
          onChange={(e) => onChange}
        />
        <StyledEye onClick={togglePasswordVisibility}>
          {showPassword ? <AiFillEyeInvisible size={18} /> : <AiFillEye size={18} />}
        </StyledEye>
      </StyledContainer>
    </>
  );
};

export default Password;
