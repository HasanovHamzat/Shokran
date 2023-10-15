import { css } from "styled-components";

export const cssResetStyles = css`
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  font-weight: normal;
  letter-spacing: normal;
  margin: 0;
  padding: 0;
  text-transform: none;
  font-family: "Roboto", sans-serif;
`;

export const CSSShadow = css`
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.14), 0 2px 1px rgba(0, 0, 0, 0.12),
    0 1px 3px rgba(0, 0, 0, 0.2);
`;

export const CSSTransition = css`
  transition: all 0.2s ease-in-out;
`;

export const cssNormal14 = css`
  ${cssResetStyles};
  font-weight: 400;
  font-size: 14px;
`;
export const cssNormal11 = css`
  ${cssResetStyles};
  font-weight: 400;
  font-size: 11px;
`;

export const cssNormal14Bold = css`
  ${cssResetStyles};
  font-weight: 700;
  font-size: 14px;
`;

export const cssNormal16Bold = css`
  ${cssResetStyles};
  font-weight: 700;
  font-size: 16px;
`;

export const sccScroll = css`
  overflow: auto;
  @supports (-moz-appearance: none) {
    scrollbar-color: #57585a;
    scrollbar-width: thin;
  }

  @media screen and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
    &::-webkit-scrollbar {
      width: 14px;
      height: 14px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
      width: 100%;
    }

    &::-webkit-scrollbar-thumb {
      border: 4px solid transparent;
      padding: 20px;
      background-clip: padding-box;
      box-sizing: border-box;
      border-radius: 100px;
      background-color: #57585a;
    }
  }
`;
