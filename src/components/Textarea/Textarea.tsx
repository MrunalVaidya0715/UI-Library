import React, { TextareaHTMLAttributes } from "react";
import styled from "styled-components";
import { TextareaProps } from "./Textarea.types";


const StyledTextarea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 700;
  font-size: 1rem;
  color: #333;
`;

const TextAreaField = styled.textarea<TextareaProps>`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  cursor: ${(props)=>props.variant === "disabled" ? "not-allowed":"pointer"};
`;

const TextArea = ({ label, variant = "default", ...rest }: TextareaProps) => {
  return (
    <StyledTextarea>
      {variant === "withLabel" && label && <Label>{label}</Label>}
      <TextAreaField {...rest} />
    </StyledTextarea>
  );
};

export default TextArea;
