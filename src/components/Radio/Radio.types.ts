export interface RadioOption {
    label: string;
    value: string;
  }
  
  export interface RadioProps {
    label: string;
    value: string;
    checked: boolean;
    onChange: () => void;
  }
  
  export interface RadioGroupProps {
    options: RadioOption[];
    value: string;
    onChange: (value: string) => void;
  }
  