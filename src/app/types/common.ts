import { reducers } from "../store/reducers";

export type RootStateType = ReturnType<typeof reducers>;
export interface IInputProps {
  name: string;
  url?: string;
  label?: any;
  formatTime?: string;
  placeholder?: string;
  className?: string;
  options?: any[];
  defaultValue?: string | number;
  defaultChecked?: string | number;
  selected?: boolean;
  sideEffect?: () => void;
  newFieldValue?: number;
  validateValue?: (el: string) => void;
  InputProps?: any;
}
