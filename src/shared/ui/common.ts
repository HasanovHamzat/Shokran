import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import styled, { css, keyframes } from "styled-components";
import { cssNormal14, cssNormal24, cssNormal16Bold } from "../../app/styles/misxins";

export const Title = styled.h1`
  ${cssNormal24};
  font-family: "Trirong", serif;
  line-height: 110%;
`;
export const SubTitle = styled.p`
  ${cssNormal14};
  font-family:  "Rubik", sans-serif;
  color: #22212266;
`;
export const SignInTitle = styled.p`
  ${cssNormal14};
  color: #21a179;
  font-family:  "Rubik", sans-serif;
`;

export const Offer = styled.a`
  ${cssNormal14};
  color: var(--green-500, #209c75);
  font-family: "Rubik", sans-serif;
`;
