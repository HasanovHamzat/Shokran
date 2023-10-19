import { FormInput } from "../../../shared/ui/form/FormInput";
import { FormCheckbox } from "../../../shared/ui/form/FormCheckbox";
import "./CardCreate.scss";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { FormProvider, useForm } from "react-hook-form";
import { Title, SubTitle, SignInTitle, Offer } from "../../../shared/ui/common";
import { BaseButton } from "../../../shared/ui/form/BaseButton";
import { setCardScreen } from "../../../app/store/reducers/card/cardStore";
import { StatusCard } from "../ui/StatusCard";
import { FormInputMask } from "../../../shared/ui/form/FormInputMask";
interface IProps {
  setPrevCard: (value: number) => void;
}
export const CardCreate = (props: IProps) => {
  const { setPrevCard } = props;
  const methods = useForm();
  const { t } = useTranslation();

  const [firstName, lastName, mobile, checked] = methods.watch([
    "firstName",
    "lastName",
    "mobile",
    "checked"
  ]);
  console.log({ firstName, lastName, mobile, checked });

  const dispatch = useDispatch();
  const onSubmit = (data: any) => {
    setPrevCard(1);
    dispatch(setCardScreen(1));
    console.log({ data });
  };
  return (
    <FormProvider {...methods}>
      <StatusCard num={1} />
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="main">
          <WrapperHeader>
            <WrapperTitle>
              <Title>{t("card.createAccount")}</Title>
              <WrapperSignIn>
                <SubTitle>{t("card.alreadyAccount")}</SubTitle>&nbsp;
                <SignInTitle>{t("card.signIn")}</SignInTitle>
              </WrapperSignIn>
            </WrapperTitle>
            <WrapperInput>
              <FormInput name={"firstName"} label={t("card.firstName")} />
              <FormInput name={"lastName"} label={t("card.lastName")} />
              <FormInput name={"mobile"} label={t("card.mobile")} />
              <FormInputMask name={"ssn"} label={t("card.ssn")} />
              
            </WrapperInput>

            <FormCheckbox
              label={
                <>
                  <span> {t("card.agreed")}</span>
                  <Offer> {t("card.policy")}</Offer>
                  <span> {t("card.and")}</span>
                  <Offer> {t("card.offer")}</Offer>
                </>
              }
              name={"checked"}
            />
          </WrapperHeader>
          <div className="btn">
            <BaseButton disabled={!firstName || !lastName || !mobile || !checked}>
              {t("buttons.create")}
            </BaseButton>
          </div>
        </div>
        {/* <InputMobile /> */}

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

const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const WrapperSignIn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
