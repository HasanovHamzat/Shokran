import "./CardPick.scss";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { setCardScreen } from "../../../app/store/reducers/card/cardStore";

import { Trans, useTranslation } from "react-i18next";
import { useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Title, SubTitle } from "../../../shared/ui/common";
import { BaseButton } from "../../../shared/ui/form/BaseButton";
import WarningIcon from "../../../shared/assets/icons/Warning.svg";

import { StatusCard } from "../ui/StatusCard";
import { CardBlockText } from "../ui/CardBlockText";
import { cssNormal14 } from "../../../app/styles/misxins";
interface IProps {
  setPrevCard: (value: number) => void;
}
export const CardPick = (props: IProps) => {
  const { setPrevCard } = props;
  const dispatch = useDispatch();

  const { t } = useTranslation();
  const data = useMemo(
    () => [
      {
        id: 1,
        label: "4 weeks"
      },
      {
        id: 2,
        label: "8 weeks"
      },
      {
        id: 3,
        label: "1 mounts"
      }
    ],
    []
  );
  const product = useMemo(
    () => [
      {
        id: 1,
        label: "$2,040.08",
        date: "Now"
      },
      {
        id: 2,
        label: "$2,040.08",
        date: "14.10"
      },
      {
        id: 3,
        label: "$2,040.08",
        date: "21.10"
      },
      {
        id: 4,
        label: "$2,040.08",
        date: "28.10"
      }
    ],
    []
  );
  const [page, setPage] = useState<number>(data[0]?.id || 1);

  const methods = useForm();
  const onSubmit = (data: any) => {
    setPrevCard(3);
    dispatch(setCardScreen(1));
    // console.log({ data });
  };
  const handleClickTab = (id: number) => {
    setPage(id);
  };
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <FormProvider {...methods}>
      <StatusCard num={3} />

      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="main">
          <WrapperHeader>
            <div className="pick_wrapper-title">
              <Title>{t("pick.title")}</Title>
              <SubTitle>
                <Trans i18nKey="pick.subTitle" components={{ break: <br /> }} />
              </SubTitle>
            </div>
            <Wrapper>
              {data?.map((tab, index) => (
                <Step
                  active={page === tab?.id}
                  onClick={() => handleClickTab(tab?.id || 0)}
                  key={index + (tab?.id || 1)}>
                  {tab?.label}
                </Step>
              ))}
            </Wrapper>
            <CardBlockText
              priceIcon={true}
              details={true}
              leftText={"$2,040.08/week"}
              showDetails={showDetails}
              setShowDetails={setShowDetails}
              options={product}
            />
          </WrapperHeader>
          <div className="pick_wrapper-amount">
            <img src={WarningIcon} alt="Icon: WarningIcon" />
            <p className="amount">{t("pick.deleted")}</p>
          </div>
          <div className="pick_wrapper-total">
            <div className="pick_wrapper-total__sub">
              <p className="pick_wrapper-total__sub-title">
                {t("pick.subTotal")} &nbsp;
                <span className="pick_wrapper-total__sub-title_item">
                  (1&nbsp;{t("card.item")})
                </span>
              </p>
              <p>$8,160.32</p>
            </div>
            <div className="pick_wrapper-total__main">
              <p className="pick_wrapper-total__main-title">{t("card.total")}</p>
              <p>$2,040.08</p>
            </div>
          </div>
          <div className="btn">
            <BaseButton>{t("pick.pay")}&nbsp; $2,040.08</BaseButton>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

const WrapperHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Step = styled.div<{ active: boolean }>`
${cssNormal14};
  display: flex;
  width: 107px;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 12px;

  color:  #4E4D4E
  margin-right: 5px;
  transition: color 0.3s;
  cursor: pointer;
  ${({ active }) =>
    active &&
    css`
      border-radius: 12px;
      font-weight: 500;
      color: #209c75;
      background: #fff;
      box-shadow: 1px 1px 4px 0px rgba(34, 33, 34, 0.04);
    `}
`;

const Wrapper = styled.div`
  * {
    box-sizing: border-box;
  }
  padding: 4px;
  border-radius: 16px;
  background: #f3f3f3;
  gap: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
