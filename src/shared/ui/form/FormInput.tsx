import { Controller, useFormContext } from "react-hook-form";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import { IInputProps } from "../../../app/types/common";

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
          <TextField
            InputProps={InputProps}
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
