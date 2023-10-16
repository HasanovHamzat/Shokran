import { FormInput } from "../../../shared/ui/form/FormInput";
import "./CardVerify.scss";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { FormProvider, useForm } from "react-hook-form";
import { Title, SubTitle } from "../../../shared/ui/common";
import { useTranslation } from "react-i18next";

import { BaseButton } from "../../../shared/ui/form/BaseButton";
interface IProps {
  setPrevCard: (value: number) => void;
}
export const CardVerify = (props: IProps) => {
  const { setPrevCard } = props;
  const { t } = useTranslation();

  const methods = useForm();

  const [verificationCode] = methods.watch(["verificationCode"]);
  const dispatch = useDispatch();
  const onSubmit = (data: any) => {
    setPrevCard(3);

    console.log({ data });
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="main">
          <WrapperHeader>
            <Title>{t("verify.title")}</Title>
            <SubTitle>{t("verify.subTitle")} 628 222 12 34</SubTitle>
            <WrapperInput>
              <FormInput name={"verificationCode"} label={t("verify.code")} />
              <p>
                <Link href="#">{t("verify.resend")}</Link>
              </p>
            </WrapperInput>
          </WrapperHeader>
          <div className="btn">
            <BaseButton disabled={!verificationCode}>{t("verify.confirm")}</BaseButton>
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
const Link = styled.a`
  font-family: Rubik;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  color: var(--blue-500, #7161ef);
  line-height: 15px;
`;
