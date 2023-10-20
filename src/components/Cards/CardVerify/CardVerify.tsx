import { FormInput } from "../../../shared/ui/form/FormInput";
import "./CardVerify.scss";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { StatusCard } from "../ui/StatusCard";

import { FormProvider, useForm } from "react-hook-form";
import { Title, SubTitle } from "../../../shared/ui/common";
import { Trans, useTranslation } from "react-i18next";

import { BaseButton } from "../../../shared/ui/form/BaseButton";
import { FormInputMask } from "../../../shared/ui/form/FormInputMask";
import { RootStateType } from "../../../app/store/store";
interface IProps {
  setPrevCard: (value: number) => void;
}
export const CardVerify = (props: IProps) => {
  const { cardCreate } = useSelector((state: RootStateType) => state.cardSlice);
  const { setPrevCard } = props;
  const { t } = useTranslation();

  const methods = useForm();

  const [verificationCode] = methods.watch(["verificationCode"]);
  // console.log({verificationCode}, verificationCode.length)
  // const dispatch = useDispatch();
  const onSubmit = (data: any) => {
    setPrevCard(4);

    // console.log({ data });
  };

  const disableBtn = verificationCode?.replace(/\D+/g, "").length !== 6;

  return (
    <FormProvider {...methods}>
      <StatusCard num={4} />

      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="main">
          <WrapperHeader>
            <div className="verify_wrapper-title">
              <Title>{t("verify.title")}</Title>
              <SubTitle>
                <Trans i18nKey="verify.subTitle" components={{ break: <br /> }} /> &nbsp;{" "}
                {cardCreate?.mobile}
              </SubTitle>
            </div>
            <WrapperInput>
              <FormInputMask name={"verificationCode"} label={t("verify.code")} mask={"999-999"} />
              <P>
                <Link href="#">{t("verify.resend")}</Link>
              </P>
            </WrapperInput>
          </WrapperHeader>
          <div className="btn">
            <BaseButton disabled={disableBtn}>{t("verify.confirm")}</BaseButton>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const P = styled.p`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: flex-end;
`;
const WrapperHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const Link = styled.a`
  font-family: "Rubik", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  color: var(--blue-500, #7161ef);
  line-height: 15px;
`;
