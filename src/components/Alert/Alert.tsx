import React, { useState } from "react";
import styled from "styled-components";
import { AlertProps } from "./Alert.types";
import { RxRocket } from "react-icons/rx";
import { BiError } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
const AlertContainer = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 50%);
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
`;

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
  margin: 0;
  h1,h2,h3,h4,h5,h6,p{
    padding:0;
    margin: 0;
    font-size: 1rem;
  }
  gap: 0.2rem;
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
  style,
  className,
  ...props
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
        <AlertContainer style={style} className={className} {...props}>
          <CloseButn>
            <AiOutlineClose onClick={onCloseAlert} size={16} />
          </CloseButn>
          <AlertIconContainer>
            {variant === "destructive" ? <BiError style={{color:"red"}} /> : <RxRocket style={{color:"blue"}} />}
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

export { Alert };
