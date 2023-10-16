import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { SelectProps } from "@material-ui/core/Select/Select";
import { Controller, useFormContext } from "react-hook-form";
import { IInputProps } from "../../../app/types/common";

export const FormSelect = ({
  name,
  label,
  options,
  defaultValue,
  ...rest
}: IInputProps & SelectProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={(props: any) => (
        <FormControl size="small" variant="outlined" fullWidth>
          <InputLabel id="repeat-label">{label}</InputLabel>
          <Select
            defaultValue={defaultValue}
            {...rest}
            value={props.field.value ? props.field.value : ""}
            onChange={(event) => {
              event.stopPropagation();
              props.field.onChange(event);
            }}
            color={"primary"}
            variant={"outlined"}
            labelId="repeat-label"
            id="repeat-select"
            label={label}>
            {options &&
              options?.map((option: any) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.label}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      )}
    />
  );
};
