import { FormInput } from "../../../shared/ui/form/FormInput";
import { FormCheckbox } from "../../../shared/ui/form/FormCheckbox";
import "./CardCreate.scss";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { FormProvider, useForm } from "react-hook-form";
import { Title, SubTitle, SignInTitle, Offer } from "../../../shared/ui/common";
import { BaseButton } from "../../../shared/ui/form/BaseButton";
import { setCardScreen, setCardCreate } from "../../../app/store/reducers/card/cardStore";
import { StatusCard } from "../ui/StatusCard";
import { FormInputMask } from "../../../shared/ui/form/FormInputMask";
import { InputMobile } from "../../Format/InputMobile/InputMobile";
import CanadaFlag from "../../../shared/assets/flags/canada.svg";
interface IProps {
  setPrevCard: (value: number) => void;
}
export const CardCreate = (props: IProps) => {
  const { setPrevCard } = props;
  const methods = useForm();
  const { t } = useTranslation();

  const [firstName, lastName, mobile, ssn, offer] = methods.watch([
    "firstName",
    "lastName",
    "mobile",
    "ssn",
    "offer"
  ]);

  const dispatch = useDispatch();
  const onSubmit = (data: any) => {
    setPrevCard(1);
    dispatch(setCardScreen(1));
    dispatch(setCardCreate(data));
  };

  console.log(mobile?.length, ssn?.length)
  console.log({mobile, ssn})

  const disableMobile = mobile?.replace(/\D+/g, "").length !== 11;


  const disableSSN = ssn?.replace(/\D+/g, "").length !== 9;
console.log({disableMobile, disableSSN})
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
              <FormInput type="text" name={"firstName"} label={t("card.firstName")} />
              <FormInput type="text" name={"lastName"} label={t("card.lastName")} />
              <FormInputMask name={"ssn"} label={t("card.ssn")} mask={"999-99-9999"} />
              <FormInputMask
                // InputProps={{
                //   startAdornment: (
                //       <Flag alt="Flag" src={CanadaFlag} />
                //   )
                // }}
                name={"mobile"}
                label={t("card.mobile")}
                mask={"+1 (999) 999-9999"}
              />
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
              name={"offer"}
            />
          </WrapperHeader>

          <div className="btn">
            <BaseButton disabled={!firstName || !lastName || disableSSN || disableMobile || !offer}>
              {t("buttons.create")}
            </BaseButton>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
const Flag = styled.img`
  width: 20px;
  margin-right: 15px;
`;

const Mobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
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
