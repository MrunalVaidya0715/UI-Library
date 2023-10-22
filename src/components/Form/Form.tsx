import React from "react";
import styled from "styled-components";
import { FormProps } from "./Form.types";

const FormWrapper = styled.div`
  height: auto;
  max-width: 95%;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 0 auto;
  padding: 1rem 1.2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  margin: 0;
  font-weight: bold;
  text-align: center;
 
`;
const GlobalReset = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }
`;

const FormContent = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
`;

const FormSubmitButton = styled.button`
  width: 100%;
  margin-top: 0.5rem;
  font-size: 1rem;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 0.5;
  }
  transition: all ease-in-out 200ms;
`;

const Form = ({ title, children, onSubmit }: FormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <FormWrapper>
      <GlobalReset>
        <FormTitle>{title}</FormTitle>
        <form onSubmit={handleSubmit}>
          <FormContent>{children}</FormContent>
          <FormSubmitButton type="submit">Submit</FormSubmitButton>
        </form>
      </GlobalReset>
    </FormWrapper>
  );
};

export default Form;
