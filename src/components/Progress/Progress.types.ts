import {CSSProperties} from "react"
export interface ProgressProps {
  value?: number;
  minValue?: number;
  maxValue?: number;
  showValue?:boolean;
  style?: CSSProperties;
  className?: string;
}
