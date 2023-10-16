import { FormInput } from "../../../shared/ui/form/FormInput";
import { FormCheckbox } from "../../../shared/ui/form/FormCheckbox";
import "./CardPick.scss";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";

import { useTranslation } from "react-i18next";
import { useMemo, useState, useCallback } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Title, SubTitle } from "../../../shared/ui/common";
import { BaseButton } from "../../../shared/ui/form/BaseButton";
import WarningIcon from "../../../shared/assets/icons/Warning.svg";
import ArrowUpIcon from "../../../shared/assets/icons/arrow-up.svg";
import ArrowDownIcon from "../../../shared/assets/icons/arrow-down.svg";
import PriceIcon from "../../../shared/assets/icons/price.svg";
export const CardPick = () => {
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
  const dispatch = useDispatch();
  const onSubmit = (data: any) => {
    console.log({ data });
  };
  const handleClickTab = (id: number) => {
    setPage(id);
  };
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const onShowDetails = useCallback(() => {
    setShowDetails(!showDetails);
  }, [showDetails]);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="main">
          <WrapperHeader>
            <Title>{t("pick.title")}</Title>
            <SubTitle>{t("pick.subTitle")}</SubTitle>
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
            <Card>
              <CardMain show={showDetails}>
                <div className="card_title">
                  <img src={PriceIcon} alt="Icon: PriceIcon" /> <span>$2,040.08/week</span>
                </div>
                <div onClick={onShowDetails}>
                  <span className="details">{t("card.details")}</span>
                  {showDetails ? (
                    <img src={ArrowUpIcon} alt="Icon: ArrowUpIcon" />
                    ) : (
                    <img src={ArrowDownIcon} alt="Icon: ArrowDownIcon" />
                  )}
                </div>
              </CardMain>
              {showDetails && (
                <>
                  {product?.map((el: any) => (
                    <WrapperCenter key={el.id}  className="card_items">
                      <div>
                        <span className="card_subtitle">{el.label}</span>
                      </div>
                      <div>
                        <span className="card_subtitle">{el.date}</span>
                      </div>
                    </WrapperCenter>
                  ))}
                </>
              )}
            </Card>
          </WrapperHeader>
          <WrapperCenter>
            <img src={WarningIcon} alt="Icon: WarningIcon" />
            <p className="amount">{t("pick.deleted")}</p>
          </WrapperCenter>
          <div className="btn">
            {/* <BaseButton>{t("pick.pay")}</BaseButton> */}
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
const WrapperCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Card = styled.div`
  padding: 12px;
margin-bottom: 12px;

  border-radius: 12px;
  border: 1px solid var(--grey-200, #f3f3f3);
  background: var(--White, #fff);
`;
const CardMain = styled.div<{ show: boolean }>`
margin-bottom: ${({ show }) => (show ? "12px" : "0px")};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Step = styled.div<{ active: boolean }>`
  display: flex;
  width: 107px;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 12px;
  font-family: Rubik;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
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
