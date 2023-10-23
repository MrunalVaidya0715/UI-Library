import React from "react";
import styled from "styled-components";
import { ProgressProps } from "./Progress.types";

const StyledProgress = styled.div`
  position: relative;
  width: 100%;
  height: 0.8rem;
  background-color: #fff;
  border: 1px solid #333;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
`;

const StyledSpan = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  font-weight: 700;
  font-size: 0.8rem;
  
`;
const ProgressBar = styled.div<ProgressProps>`
  width: ${(props) => {
    if ((props.value ?? 0) < 0) {
      props.value = 0;
    }
    if ((props.value ?? 0) > 100) {
      props.value = 100;
    }

    const minValue = props.minValue || 0;
    const maxValue = props.maxValue || 100;
    return (((props.value ?? 0) - minValue) / (maxValue - minValue)) * 100;
  }}%;
  height: 100%;
  background-color: #007bff;
  border-radius: 8px;
  transition: width 0.3s ease-in;
`;

const Progress = ({ value, minValue, maxValue, showValue, style, className, ...props }: ProgressProps) => {
  return (
    <StyledProgress style={style} className={className} {...props}>
      <ProgressBar
        value={value}
        minValue={minValue || 0}
        maxValue={maxValue || 100}
      >
        {
          showValue && <StyledSpan>{value}%</StyledSpan>
        }
      </ProgressBar>
    </StyledProgress>
  );
};

export { Progress };
