export interface AlertProps {
  variant?: 'default' | 'destructive';
  title?: string;
  description?: string;
  children?: React.ReactNode;
  onClose?: () => void;
}
