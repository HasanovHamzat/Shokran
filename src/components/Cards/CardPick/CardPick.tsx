import { FormInput } from "../../../shared/ui/form/FormInput";
import { FormCheckbox } from "../../../shared/ui/form/FormCheckbox";
import "./CardPick.scss";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { FormProvider, useForm } from "react-hook-form";
import { Title, SubTitle } from "../../../shared/ui/common";
import { BaseButton } from "../../../shared/ui/form/BaseButton";

export const CardPick = () => {
  const { t } = useTranslation();

  const methods = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data: any) => {
    console.log({ data });
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="main">
          <WrapperHeader>
            <Title>Create your account</Title>
            <SubTitle>Already have an account? Sign in</SubTitle>
            <WrapperInput>
              <FormInput name={"firstName"} label={"First name"} />
              <FormInput name={"lastName"} label={"Last name"} />
              <FormInput name={"mobile"} label={"Mobile"} />
            </WrapperInput>

            <FormCheckbox
              label={"I’ve read and agreed to the terms of the privacy policy and the offer"}
              name={"checked"}
            />
          </WrapperHeader>
          <div className="btn">
            <BaseButton>Create account</BaseButton>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const WrapperHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
