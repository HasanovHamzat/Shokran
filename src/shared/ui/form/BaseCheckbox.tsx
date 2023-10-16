import { Checkbox, FormControlLabel } from "@mui/material";
import { CheckboxProps } from "@mui/material/Checkbox/Checkbox";
import { ReactNode } from "react";
import styled from "styled-components";
import { ActionWithTooltip } from "./ActionWithTooltip";

export const BaseCheckbox = ({
  label,
  tooltip,
  ...props
}: CheckboxProps & { label: ReactNode; tooltip?: string }) => {
  return (
    <div className={"flex items-center"}>
      <ControlLabel
        control={<Checkbox color={"primary"} className={"!mr-8"} {...props} />}
        label={label as string}
      />
      {tooltip && <ActionWithTooltip content={tooltip} />}
    </div>
  );
};
const ControlLabel = styled(FormControlLabel)`
  .MuiCheckbox-root {
    margin-right: 6px !important;
  }
  margin-right: 0 !important;
  margin-left: 0 !important;
`;
