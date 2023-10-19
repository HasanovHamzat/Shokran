import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import styled, { css, keyframes } from "styled-components";
import { cssNormal11, cssNormal16Bold } from "../../app/styles/misxins";

export const InfoOutlinedIconStyle = styled(InfoOutlinedIcon)`
  color: #ff4e3f;
  margin-left: 6px;
`;

const SkeletonAnim = keyframes`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`;

export const SkeletonCSS = css`
  background: linear-gradient(90deg, #e0e0e0 35%, #f2f5f7 60%, #e0e0e0 80%);
  background-size: 400% 100%;
  animation: ${SkeletonAnim} 1.5s infinite;
`;
export const Title = styled.h1`
  font-family: Trirong;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 110%;
`;
export const SubTitle = styled.p`
  font-family: Rubik;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  color: #22212266;
`;
export const SignInTitle = styled.p`
color: #21A179;
font-family: Rubik;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 140%;
`;

export const Offer = styled.a`
color: var(--green-500, #209C75);
font-family: Rubik;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 140%;
`;
export const TitleText = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #444444;
`;

export const Layout = styled.div`
  * {
    box-sizing: border-box;
  }
  margin: 30px 25px 25px 75px;
  padding-bottom: 12px;
`;

export const TableHeader = styled.div`
  margin: 8px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
`;
export const Title16B = styled.span`
  ${cssNormal16Bold};
  color: #444444;
  font-weight: bold;
  margin-bottom: 12px;
`;
export const ErrorMessage = styled.span`
  margin-left: 14px;
  font-size: 14px;
  color: #f44336;
  margin-top: 4px;
  font-weight: 400;
  line-height: 1.66;
  text-align: left;
  margin-right: 14px;
`;
export const LayoutMedia = styled.div`
  * {
    box-sizing: border-box;
  }
  display: flex;
  flex-direction: column;
  margin: 30px 25px 25px 75px;
`;

export const MinWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0 10px 0;
`;

export const HeadDescription = styled.p`
  ${cssNormal11};
  color: #444444;
  font-size: 17px;
  width: 700px;
  margin: 18px 20px 18px 0;
`;
