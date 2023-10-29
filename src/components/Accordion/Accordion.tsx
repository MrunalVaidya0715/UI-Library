import React, { useState } from "react";
import styled, {css, keyframes} from "styled-components";
import { AccordionProps, AccordionItemProps } from "./Accordion.types";
import {AiOutlinePlus} from "react-icons/ai"
const StyledAccordion = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledAccordionItem = styled.div<AccordionItemProps>`
  border: 1px solid #ddd;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: ${
    (props) => props.isActive? "0px 3px 6px rgba(0, 0, 0, 0.08)":"0px 3px 6px rgba(0, 0, 0, 0.0)"
  };
 ;
`;

const StyledAccordionTrigger = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  font-weight: 600;
  background-color: #faf6f6;
  user-select: none;
`;
const show = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const StyledAccordionContent = styled.div<AccordionItemProps>`
  padding: 0.5rem;
  background-color: #ffffff;
  border-top: 1px solid #ddd; 
  animation: ${(props) => (props.isActive ? "": show)} 450ms linear;

`;

const Accordion = ({ collapsible, children }: AccordionProps) => {
  const [activeItem, setActiveItem] = useState<string | null>("");

  const handleItemClick = (value: string) => {
    if (collapsible) {
      setActiveItem((prevItem) => (prevItem === value ? null : value));
    }
  };

  return (
    <StyledAccordion>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            activeItem,
            onClick: handleItemClick,
          } as AccordionItemProps);
        }
        return child;
      })}
    </StyledAccordion>
  );
};

const AccordionItem = ({
  value,
  activeItem,
  onClick,
  isActive,
  children,
}: AccordionItemProps) => {
  const isAct = value === activeItem;

  return (
    <StyledAccordionItem isActive={isAct}>
      
      <StyledAccordionTrigger onClick={() => onClick && value && onClick(value)}>
        {value}
        <AiOutlinePlus style={{transform: isAct? "rotate(45deg)":"", transition:"all ease-in-out 150ms"}}/>
      </StyledAccordionTrigger>
      {isAct && (
        <StyledAccordionContent >{children}</StyledAccordionContent>
      )}
    </StyledAccordionItem>
  );
};

export { Accordion, AccordionItem };
