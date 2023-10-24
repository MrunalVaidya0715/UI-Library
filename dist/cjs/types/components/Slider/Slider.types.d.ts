export interface SliderProps {
    value: number;
    maxValue?: number;
    step?: number;
    onChange?: (value: number) => void;
}
