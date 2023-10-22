export interface SliderProps {
    defaultValue: number;
    maxValue: number;
    step: number;
    onChange?: (value: number) => void;
}
