import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SelectProps } from "./Select.types";
import {BiExpandVertical} from 'react-icons/bi'
const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;
  min-width: 200px;
`;

const SelectButton = styled.button`
  background: #fff;
  border: 1px solid #ccc;
  padding: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  &:hover{
    opacity: 0.7;
  }
  transition: all ease-in-out 150ms;
`;


interface Op {
  isOpen: boolean;
}

const OptionsList = styled.ul<Op>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  
  position: absolute;
  border-radius: 8px;
  overflow-y:auto;
  top: 2.5rem;
  left: 0;
  width: 100%;
  list-style: none;
  padding: 0.5rem;
  margin: 0;
  background: #fff;
  border: 1px solid #ccc;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
 
`;

const Option = styled.li`
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: black;
  }
`;

const Select = ({ options, value, onChange, variant, label }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedOptions, setSelectedOptions] = useState(
    variant === "multiple" ?  value || [] : value
  );

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option:string) => {
    if (variant === "multiple") {
      if(Array.isArray(selectedOptions)){
        if (selectedOptions.includes(option)) {
          setSelectedOptions(selectedOptions.filter((item:string) => item !== option));
        } else {
          setSelectedOptions([...selectedOptions, option]);
        }
      }
    } else {
      setSelectedOptions(option);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (variant === "single") {
      setIsOpen(false);
    }
    onChange(selectedOptions);
  }, [selectedOptions, onChange, variant]);

  return (
    <SelectWrapper>
      <SelectButton onClick={toggleOptions}>
        
        {
            (selectedOptions?.length === 0 && label) ? <label>{label}</label> : (selectedOptions?.length === 0 && !label) && (
                variant === "multiple" ? <label>Select Options</label>: <label>Select Option</label>
            )
        }
        {Array.isArray(selectedOptions)
          ? selectedOptions.join(", ")
          : selectedOptions}
          <BiExpandVertical/>
      </SelectButton>
      <OptionsList isOpen={isOpen}>
        {options.map((option) => (
          <Option
            key={option}
            onClick={() => handleOptionClick(option)}
            style={{
              backgroundColor:
                variant === "multiple" && selectedOptions?.includes(option)
                  ? "#f0f0f0"
                  : "transparent",
                  
            }}
          >
            {option}
          </Option>
        ))}
      </OptionsList>
    </SelectWrapper>
  );
};

export default Select;
