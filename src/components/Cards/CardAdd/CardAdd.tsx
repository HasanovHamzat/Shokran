
import { FormInput } from "../../../shared/ui/form/FormInput"
import  "./CardAdd.scss"
// import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { FormProvider, useForm } from "react-hook-form";
import { Title, SubTitle } from "../../../shared/ui/common";
import { BaseButton } from "../../../shared/ui/form/BaseButton";
interface IProps {
  setPrevCard: (value: number) => void;
}
export const CardAdd =  (props: IProps ) => {
  const {setPrevCard} = props;
  const methods = useForm();

  const [
    cardNumber,
    expirationDate,
    cvc,
  ] = methods.watch([
    "cardNumber",
    "expirationDate",
    "cvc",
  ]);
//   const dispatch = useDispatch();
  const onSubmit = (data: any) => {
    setPrevCard(2)

   console.log({data})
  };
    return (


        <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
      
        <div className="main">
            <WrapperHeader>


      <Title>Add credit card</Title>
      <SubTitle>It's safe. You can change the data or unlink the card in your account</SubTitle>
      <WrapperInput>


      <FormInput
              name={"cardNumber"}
              label={"Card number"}
              />
                 <FormInput
              name={"expirationDate"}
              label={"Expiration date"}
            />
                     <FormInput
              name={"cvc"}
              label={"CVC"}
            />
        </WrapperInput>
            </WrapperHeader>
            <div className="btn">

<BaseButton  disabled={ !cardNumber  ||
    !expirationDate ||
    !cvc}>
Save Data</BaseButton>
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