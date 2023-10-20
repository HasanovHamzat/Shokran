import "./CardAdd.scss";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setCardScreen } from "../../../app/store/reducers/card/cardStore";
import { Trans, useTranslation } from "react-i18next";
import { StatusCard } from "../ui/StatusCard";
import { useState } from "react";

import { FormProvider, useForm } from "react-hook-form";
import { Title, SubTitle } from "../../../shared/ui/common";
import { BaseButton } from "../../../shared/ui/form/BaseButton";
import { RootStateType } from "../../../app/types/common";
import { CreditCard } from "../../../shared/ui/credit/CreditCard";
import { IBankCard } from "../../../app/types/CardTypes";
interface IProps {
  setPrevCard: (value: number) => void;
}
export const CardAdd = (props: IProps) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { cardScreen } = useSelector((state: RootStateType) => state.cardSlice);

  const { setPrevCard } = props;
  const methods = useForm();
  const [cardstate, setcardState] = useState<IBankCard>({
    cardNumber: "",
    expiryDate: "",
    cvc: ""
  });
  const [cardstateError, setcardStateError] = useState({
    cardNumber: "",
    expiryDate: "",
    cvc: ""
  });
  const onSubmit = (data: any) => {
    setPrevCard(3);
    dispatch(setCardScreen(2));
  };
  const disableBtn: boolean =
    !cardstate.cardNumber ||
    !cardstate.expiryDate ||
    !cardstate.cvc ||
    cardstate.cardNumber.length !== 19 ||
    cardstate.expiryDate.length !== 7 ||
    cardstate.cvc.length !== 3 ||
    Boolean(cardstateError?.cardNumber) ||
    Boolean(cardstateError?.expiryDate) ||
    Boolean(cardstateError?.cvc);
  console.log(
    "cardNumber",
    cardstate.cardNumber.length,
    "expiryDate",
    cardstate.expiryDate.length,
    "cvc",
    cardstate.cvc.length
  );
  return (
    <FormProvider {...methods}>
      <StatusCard num={2} />
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="main">
          <WrapperHeader>
            <WrapperTitle>
              <Title>{t("card.addCreditCard")}</Title>
              <SubTitle>
                <Trans i18nKey="card.unlinkCard" components={{ break: <br /> }} />
              </SubTitle>
            </WrapperTitle>
          </WrapperHeader>
          <CreditCard
            cardstateError={cardstateError}
            setcardStateError={setcardStateError}
            cardstate={cardstate}
            setcardState={setcardState}
          />
          <div className="btn">
            <BaseButton disabled={disableBtn}>{t("buttons.save")}</BaseButton>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const WrapperHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
