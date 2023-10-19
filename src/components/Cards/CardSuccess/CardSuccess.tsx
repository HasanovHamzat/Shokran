import "./CardSuccess.scss";
// import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Trans, useTranslation } from "react-i18next";
import { CardBlockText } from "../ui/CardBlockText";
import { CardTotalDetails } from "../ui/CardTotalDetails";

import { FormProvider, useForm } from "react-hook-form";
import { Title, SubTitle } from "../../../shared/ui/common";
import { BaseButton } from "../../../shared/ui/form/BaseButton";
import logoDone from "../../../shared/assets/icons/done.svg";
interface IProps {
  setPrevCard: (value: number) => void;
}
export const CardSuccess = (props: IProps) => {
  const { setPrevCard } = props;
  const { t } = useTranslation();

  const methods = useForm();
  // const dispatch = useDispatch();
  const onSubmit = (data: any) => {
    setPrevCard(5);

    console.log({ data });
  };
  const product = [
    {
      id: 1,
      price: 1233,
      label: "Sneakers X Ras 2 Square Mid L WTR",
      color: "Glacial Blue asdasdasdas Nimbus",
      size: 35,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA1c9IrhsZlYck8MZSuRDZxLEus2tO6T_2lA&usqp=CAU"
    },
    {
      id: 2,
      price: 5322,
      label: "Nike",
      color: "blue",
      size: 31,
      img: "https://cdn.urbanvibes.com/upload/mdm/media_content/resize/e67/1000_1000_354e/83678160299.jpg"
    },
    // {
    //   id: 3,
    //   price: 245300,
    //   label: "Golt",
    //   color: "blue",
    //   size: 43,
    //   img: "https://cdn.urbanvibes.com/upload/mdm/media_content/resize/6dd/1000_1000_a82c/83678220299.jpg"
    // }
  ];
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="success">
          <WrapperHeader>
            <div className="logo">
              <img className="icon" src={logoDone} alt="Logo: Success" />
            </div>
            <div className="success_wrapper-title">
              <Title>{t("success.title")}</Title>
              <SubTitle>
                <Trans i18nKey="success.subTitle" components={{ break: <br /> }} />
              </SubTitle>
            </div>
          </WrapperHeader>
          <WrapperCard>
            <CardTotalDetails product={product} />
            <CardBlockText leftText={t("card.cardNumber")} rightText={"**56"} />
            <CardBlockText priceIcon leftText={"$2,040.08/week"} rightText={"3 weeks"} />
          </WrapperCard>

          <div className="btn">
            <BaseButton>{t("buttons.home")}</BaseButton>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

const WrapperHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
`;
const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
