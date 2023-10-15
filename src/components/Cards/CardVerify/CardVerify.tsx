
import { FormInput } from "../../../shared/ui/form/FormInput"
import  "./CardVerify.scss"
// import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { FormProvider, useForm } from "react-hook-form";
import { Title, SubTitle } from "../../../shared/ui/common";
import { BaseButton } from "../../../shared/ui/form/BaseButton";
interface IProps {
  setPrevCard: (value: number) => void;
}
export const CardVerify = (props: IProps  ) => {
  const {setPrevCard} = props;

  const methods = useForm();

  const [
    verificationCode,
  ] = methods.watch([
    "verificationCode",
  ]);
//   const dispatch = useDispatch();
  const onSubmit = (data: any) => {
    setPrevCard(3)

   console.log({data})
  };
    return (


        <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
      
        <div className="main">
            <WrapperHeader>


      <Title>Verify the payment</Title>
      <SubTitle>Enter the one-time verification we just sent to 628 222 12 34</SubTitle>
      <WrapperInput>


      <FormInput
              name={"verificationCode"}
              label={"Verification Code"}
              />
        </WrapperInput>

            </WrapperHeader>
            <div className="btn">

<BaseButton disabled={ !verificationCode 
  } >
confirm
</BaseButton>
            </div>
    </div>
        </form>
      </FormProvider>

   
    )
}

const WrapperInput = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
`
const WrapperHeader = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
`