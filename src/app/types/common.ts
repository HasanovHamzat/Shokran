import { rootReducer } from "../store/reducers/rootReducer";


export type RootStateType = ReturnType<typeof rootReducer>;
export interface IInputProps {
  name: string;
  url?: string;
  label?: any;
  mask?: string;
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
