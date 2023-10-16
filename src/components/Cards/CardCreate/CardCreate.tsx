import { FormInput } from "../../../shared/ui/form/FormInput";
import { FormCheckbox } from "../../../shared/ui/form/FormCheckbox";
import "./CardCreate.scss";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { FormProvider, useForm } from "react-hook-form";
import { Title, SubTitle } from "../../../shared/ui/common";
import { BaseButton } from "../../../shared/ui/form/BaseButton";
import { setCardScreen } from "../../../app/store/reducers/card/cardStore";

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

  // const methods = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data: any) => {
    setPrevCard(1);
    dispatch(setCardScreen(1));
    console.log({ data });
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="main">
          <WrapperHeader>
            <WrapperTitle>
              <Title>{t("card.createAccount")}</Title>
              <SubTitle>{t("card.alreadyAccount")}</SubTitle>
            </WrapperTitle>
            <WrapperInput>
              <FormInput name={"firstName"} label={t("card.firstName")} />
              <FormInput name={"lastName"} label={t("card.lastName")} />
              <FormInput name={"mobile"} label={t("card.mobile")} />
              <FormInput name={"securityNumber"} label={t("card.securityNumber")} />
            </WrapperInput>

            <FormCheckbox label={t("card.offer")} name={"checked"} />
          </WrapperHeader>
          <div className="btn">
            <BaseButton disabled={!firstName || !lastName || !mobile || !checked}>
              {t("buttons.create")}
            </BaseButton>
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

const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
