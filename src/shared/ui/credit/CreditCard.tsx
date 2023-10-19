import { useCreditCardValidator, images } from "react-creditcard-validator";
import "./style.scss";
import { useTranslation } from "react-i18next";
import { IBankCard } from "../../../app/types/CardTypes";

interface IProps {
  cardstate: IBankCard;
  setcardState: (el: IBankCard) => void;
}
export const CreditCard = (props: IProps) => {
  const { cardstate, setcardState } = props;
  const { t } = useTranslation();

  function expDateValidate(_: unknown, year: string) {
    if (Number(year) > 2035) {
      return "Expiry Date Year cannot be greater than 2035";
    }
    return;
  }

  const {
    getCardNumberProps,
    getCardImageProps,
    getCVCProps,
    getExpiryDateProps,
    meta: { erroredInputs }
  } = useCreditCardValidator({ expiryDateValidator: expDateValidate });
  console.log({ erroredInputs });
  return (
    <main>
      <div className="wrapper-group">
        <div className="input-group">
          <svg {...getCardImageProps({ images })} />
          <input
            {...getCardNumberProps({
              onChange: (e) =>
                setcardState({
                  ...cardstate,
                  [e.target.name]: e.target.value
                })
            })}
            placeholder={t("card.cardNumber") as string}
          />
        </div>
        <small>{erroredInputs.cardNumber && t("error.cardNumber")}</small>
      </div>
      <div className="wrapper-group">
        <div className="input-group">
          <input
            {...getExpiryDateProps({
              onChange: (e) =>
                setcardState({
                  ...cardstate,
                  [e.target.name]: e.target.value
                })
            })}
            placeholder={t("card.expirationDate") as string}
          />
        </div>
        <small>{erroredInputs.expiryDate && t("error.expiryDate")}</small>
      </div>
      <div className="wrapper-group">
        <div className="input-group">
          <input
            {...getCVCProps({
              onChange: (e) =>
                setcardState({
                  ...cardstate,
                  [e.target.name]: e.target.value
                })
            })}
            placeholder={t("card.cvc") as string}
          />
        </div>
        <small>{erroredInputs.cvc && t("error.cvc")}</small>
      </div>
    </main>
  );
};
