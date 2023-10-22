import React, { useState } from "react";
import styled from "styled-components";
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
    (props) => props.value === props.activeItem? "0px 3px 6px rgba(0, 0, 0, 0.05)":"0px 3px 6px rgba(0, 0, 0, 0.0)"
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
  background-color: #f0f0f0;
  user-select: none;
`;

const StyledAccordionContent = styled.div<AccordionItemProps>`
  padding: 1rem;
  background-color: #ffffff;
  border-top: 1px solid #ddd; 

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
          });
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
  children,
}: AccordionItemProps) => {
  const isActive = value === activeItem;

  return (
    <StyledAccordionItem>
      <StyledAccordionTrigger onClick={() => onClick(value)}>
        {children}
        <AiOutlinePlus style={{transform: isActive? "rotate(45deg)":"", transition:"all ease-in-out 150ms"}}/>
      </StyledAccordionTrigger>
      {isActive && (
        <StyledAccordionContent>{children}</StyledAccordionContent>
      )}
    </StyledAccordionItem>
  );
};

export { Accordion, AccordionItem };
