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
        control={<StyledCheckbox color={"primary"} className={"!mr-8"} {...props} />}
        label={label as string}
      />
      {tooltip && <ActionWithTooltip content={tooltip} />}
    </div>
  );
};
const ControlLabel = styled(FormControlLabel)`
  .MuiCheckbox-root {
    display: flex;
    align-items: flex-start;
    padding: 0 !important;
    margin-top: -12px!important;
    margin-right: 4px !important;
  }
  .css-j204z7-MuiFormControlLabel-root{
    
  }
  margin-left: 0 !important;
  margin-right: 0 !important;
  text-align: left;
`;
const StyledCheckbox = styled(Checkbox)`
svg{
  font-size: 20px;
}
`;
