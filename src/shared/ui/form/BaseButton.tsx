
import styled  from "styled-components";
import {  ReactNode } from "react";

interface IProps{
  children: string | ReactNode;
  disabled?: boolean;
}
export const BaseButton = (props: IProps) => {
    const {children, disabled} = props;
    return (
        <Button  disabled={disabled} >
      {children}
        </Button>
    )
    
}
 const Button = styled.button`
    width: 100%;
    font-family: Trirong;
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; 
    text-transform: capitalize;
    color: #fff;
    padding: 16px 32px;
    border-radius: 12px;
    background-color:  #209C75;
    cursor: pointer;
    border: none;
`;
