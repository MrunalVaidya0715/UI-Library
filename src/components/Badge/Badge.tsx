import React from "react";
import styled from "styled-components";
import { BadgeProps } from "./Badge.types";


const StyledBadge = styled.div<BadgeProps>`
  display: inline-block;
  padding: 0.4rem 0.6rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 500;
  text-align: center;
  border-radius: 8px;
  letter-spacing: 0.05rem;
  user-select: none;
  background-color: ${
    (props)=>props.variant === "secondary" ? "#6c757d":props.variant === "outline"? "transparent": props.variant === "destructive" ? "#dc3545" :"#007bff"
  };
  border: solid 2px;
  border-color: ${
    (props)=>props.variant === "secondary" ? "#1b1c1e":props.variant === "outline"? "#6c757d": props.variant === "destructive" ? "#a42835" :"#124d8d"
  };
  color: ${
    (props) => props.variant === "outline" && "#6c757d"
  }
  

`;

const Badge = ({ text, variant, style, className, ...props }: BadgeProps) => {
  return <StyledBadge style={style} className={className} variant={variant} {...props}>{text}</StyledBadge>;
};

export {Badge};
