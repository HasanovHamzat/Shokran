import { InfoOutlined } from "@material-ui/icons";
import { Tooltip } from "@mui/material";
import styled from "styled-components";
import { ReactNode } from "react";

interface IProp {
  onClick?: () => void;
  content?: string;
  margin?: string;
  children?: ReactNode;
}

export const ActionWithTooltip  = ({ onClick, content, margin = "6px", children }: IProp) => {
  return (
    <Tooltip
      children={
        <Wrapper icon={!!children} onClick={onClick}>
          {children ? children : <InfoOutlinedIcon margin={margin} fontSize="small" />}
        </Wrapper>
      }
      title={content || ""}
    />
  );
};

const Wrapper = styled.div<{ icon: boolean }>`
  display: flex;
  align-items: center;
  svg {
    path {
      ${({ icon }) => (icon ? "fill: black" : "")};
    }
  }
`;
const InfoOutlinedIcon = styled(InfoOutlined)<{
  margin: string;
}>`
  && {
    color: #5cb85c;
    margin-left: ${({ margin }) => margin};
  }
`;
