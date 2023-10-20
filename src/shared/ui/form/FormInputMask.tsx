import { Controller, useFormContext } from "react-hook-form";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import { IInputProps } from "../../../app/types/common";
import InputMask from "react-input-mask";

import styled from "styled-components";
export const FormInputMask = ({
  name,
  mask,
  helperText,
  sideEffect,
  InputProps,
  ...rest
}: IInputProps & TextFieldProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={(props: any) => {
        return (
          <InputMask
            mask={mask}
            value={props.field.value ? props.field.value : ""}
            onChange={props.field.onChange}>
            {(inputProps: any) => {
              return (
                <WhiteBorderTextField
                  InputProps={InputProps}
                  required
                  {...rest}
                  variant="outlined"
                  color={"primary"}
                  size="small"
                />
              );
            }}
          </InputMask>
        );
      }}
    />
  );
};
const WhiteBorderTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    border: 1px solid var(--grey-200, #f3f3f3);
    color: var(--grey-800, #4e4d4e);
    height: 56px;
    border-radius: 12px;
    border: 1px solid var(--grey-200, #f3f3f3);
  }

  & label.Mui-focused {
    color: var(--grey-800, #4e4d4e);
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border: 1px solid var(--grey-200, #f3f3f3);
    }
  }
`;
