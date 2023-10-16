import { FormInput } from "../../../shared/ui/form/FormInput";
import "./CardAdd.scss";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setCardScreen } from "../../../app/store/reducers/card/cardStore";
import { useTranslation } from "react-i18next";

import { FormProvider, useForm } from "react-hook-form";
import { Title, SubTitle } from "../../../shared/ui/common";
import { BaseButton } from "../../../shared/ui/form/BaseButton";
import { RootStateType } from "../../../app/types/common";
interface IProps {
  setPrevCard: (value: number) => void;
}
export const CardAdd = (props: IProps) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { cardScreen } = useSelector((state: RootStateType) => state.cardSlice);
  console.log({ cardScreen });

  const { setPrevCard } = props;
  const methods = useForm();

  const [cardNumber, expirationDate, cvc] = methods.watch(["cardNumber", "expirationDate", "cvc"]);
  //   const dispatch = useDispatch();
  const onSubmit = (data: any) => {
    setPrevCard(2);
    dispatch(setCardScreen(2));

    console.log({ data });
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="main">
          <WrapperHeader>
            <Title>{t("card.addCreditCard")}</Title>
            <SubTitle>{t("card.unlinkCard")}</SubTitle>
            <WrapperInput>
              <FormInput name={"cardNumber"} label={t("card.cardNumber")} />
              <FormInput name={"expirationDate"} label={t("card.expirationDate")} />
              <FormInput name={"cvc"} label={t("card.cvc")} />
            </WrapperInput>
          </WrapperHeader>
          <div className="btn">
            <BaseButton disabled={!cardNumber || !expirationDate || !cvc}>
              {t("buttons.save")}
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
