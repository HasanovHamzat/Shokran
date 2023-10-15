
import { FormInput } from "../../../shared/ui/form/FormInput"
import { FormCheckbox } from "../../../shared/ui/form/FormCheckbox"
import  "./CardCreate.scss"
// import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import {  FormProvider, useForm } from "react-hook-form";
import { Title, SubTitle } from "../../../shared/ui/common";
import { BaseButton } from "../../../shared/ui/form/BaseButton";
// interface IFormInputs {
//   firstName: string;
//   lastName: string;
//   mobile: string;
//   checked: boolean;
// }
interface IProps {
  setPrevCard: (value: number) => void;
}
export const CardCreate = (props: IProps ) => {
  const {setPrevCard} = props;
  const methods = useForm();


  const [
    firstName,
    lastName,
    mobile,
    checked
  ] = methods.watch([
    "firstName",
    "lastName",
    "mobile",
    "checked"
  ]);
  console.log({ firstName,
    lastName,
    mobile,
    checked})

  // const methods = useForm();
//   const dispatch = useDispatch();
  const onSubmit = (data: any) => {
    setPrevCard(1)
   console.log({data})
  };
    return (


        <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
      
        <div className="main">
            <WrapperHeader>

<WrapperTitle>

      <Title>Create your account</Title>
      <SubTitle>Already have an account? Sign in</SubTitle>
</WrapperTitle>
      <WrapperInput>


      <FormInput
              name={"firstName"}
              label={"First name"}
              />
                 <FormInput
              name={"lastName"}
              label={"Last name"}
            />
                     <FormInput
              name={"mobile"}
              label={"Mobile"}
            />
        </WrapperInput>

             <FormCheckbox
        label={"I’ve read and agreed to the terms of the privacy policy and the offer"}
        name={"checked"}
        />
            </WrapperHeader>
            <div className="btn">

<BaseButton disabled={ !firstName  ||
    !lastName ||
    !mobile  ||
    !checked} >
Create account
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

const WrapperTitle = styled.div`
display: flex;
flex-direction: column;
gap: 12px;
`