import { Controller, useFormContext } from "react-hook-form";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import { IInputProps } from "../../../app/types/common";
import styled from "styled-components";

export const FormInput = ({
  name,
  helperText,
  sideEffect,
  InputProps,
  ...rest
}: IInputProps & TextFieldProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={(props: any) => {
        return (
          <WhiteBorderTextField
            InputProps={InputProps}
            required
            {...rest}
            variant="outlined"
            error={!!props.formState.errors[name]}
            helperText={!!props.formState.errors[name] && helperText}
            color={"primary"}
            value={props.field.value ? props.field.value : ""}
            onChange={(event) => {
              props.field.onChange(event);
              sideEffect && sideEffect();
            }}
            size="small"
          />
        );
      }}
    />
  );
};
const WhiteBorderTextField = styled(TextField)`
  .MuiOutlinedInput-root {
     padding-top: 0 !important;
     padding-bottom:  0 !important;
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