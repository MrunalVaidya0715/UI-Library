import React, { useState } from "react";
import styled from "styled-components";
import { AlertProps } from "./Alert.types";
import { RxRocket } from "react-icons/rx";
import { BiError } from "react-icons/bi";
import {AiOutlineClose} from "react-icons/ai"
const AlertContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 1.5rem;
  margin: 0 auto;
  max-width: 350px;
  width: fit-content;
  gap: 2rem;
`;

const CloseButn = styled.div`
    position: absolute;
    cursor: pointer;
    right: 0.5rem;
    top: 0.5rem;
`

const AlertTitle = styled.h3<AlertProps>`
  margin: 0;
  font-weight: bold;
  font-size: 1.2rem;
  color: ${(props) => (props.variant === "destructive" ? "red" : "inherit")};
`;

const AlertDescription = styled.p`
  margin: 0;
  margin-top: 1rem;
  font-size: 1rem;
`;

const AlertInstruct = styled.div<AlertProps>`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  font-size: 2rem;
  margin: 1rem 0;
`;

const AlertIconContainer = styled.div<AlertProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 1rem 0;
`;


const Alert = ({
    variant,
    title,
    description,
    children,
    onClose,
  }: AlertProps) => {
    const [isOpen, setIsOpen] = useState(true);
  
    const onCloseAlert = () => {
      setIsOpen(false);
      if (onClose) {
        onClose();
      }
    };
  
    return (
      <>
        {isOpen && (
          <AlertContainer>
            <CloseButn>
              <AiOutlineClose onClick={onCloseAlert} size={16} />
            </CloseButn>
            <AlertIconContainer>
              {variant === "destructive" ? <BiError /> : <RxRocket />}
            </AlertIconContainer>
            <AlertInstruct>
              <AlertTitle variant={variant}>{title}</AlertTitle>
              <AlertDescription>{description}</AlertDescription>
              {children}
            </AlertInstruct>
          </AlertContainer>
        )}
      </>
    );
  };
  
  export default Alert;