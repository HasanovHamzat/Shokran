import { CheckboxProps } from "@mui/material/Checkbox/Checkbox";
import { ReactNode } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { BaseCheckbox } from "./BaseCheckbox";

export const FormCheckbox = ({
  name,
  label,
  className,
  tooltip,
  style,
  ...rest
}: {
  name: string;
  label: any;
  className?: string;
  tooltip?: string;
  style?: ReactNode;
} & CheckboxProps) => {
  const { control } = useFormContext();
  return (
    <div className={` ${className}`}>
      <Controller
        control={control}
        name={name}
        render={(props: any) => (
          <BaseCheckbox
            {...rest}
            style={style}
            tooltip={tooltip}
            label={label}
            onChange={(e) => props.field.onChange(e.target.checked)}
            checked={props.field.value}
            value={props.field.value ? props.field.value : false}
          />
        )}
      />
    </div>
  );
};
