
import  "./CardError.scss"
// import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import logoClose from "../../../shared/assets/icons/close.svg" 

import { FormProvider, useForm } from "react-hook-form";
import { Title, SubTitle } from "../../../shared/ui/common";
import { BaseButton } from "../../../shared/ui/form/BaseButton";
interface IProps {
  setPrevCard: (value: number) => void;
}
export const CardError = (props: IProps  ) => {
  const {setPrevCard} = props;

  const methods = useForm();
//   const dispatch = useDispatch();
  const onSubmit = (data: any) => {
    setPrevCard(5)

   console.log({data})
  };
    return (


        <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
      
        <div className="main">
            <WrapperHeader>
<div className="logo_error">

            <img src={logoClose} alt="Logo: close"/>
</div>

      <Title>Something went wrong</Title>
      <SubTitle>Сheck that there is enough money on card or change the payment plan </SubTitle>



            </WrapperHeader>
            <div className="btn">

<BaseButton >
Try Again
</BaseButton>
            </div>
    </div>
        </form>
      </FormProvider>

   
    )
}


const WrapperHeader = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 24px;
`