/* eslint-disable react-refresh/only-export-components */
import styled from "styled-components";
import PriceIcon from "../../../shared/assets/icons/price.svg";
import ArrowUpIcon from "../../../shared/assets/icons/arrow-up.svg";
import ArrowDownIcon from "../../../shared/assets/icons/arrow-down.svg";
import { useTranslation } from "react-i18next";
import { useCallback } from "react";
interface IOption {
  id: number;
  label: string;
  date: string;
}
interface IProps {
  priceIcon?: boolean;
  details?: boolean;
  leftText: string;
  rightText?: string;
  showDetails?: boolean;
  setShowDetails?: (el: boolean) => void;
  options?: IOption[];
}
export const CardBlockText = (props: IProps) => {
  const {
    priceIcon = false,
    details = false,
    leftText,
    rightText,
    showDetails = false,
    setShowDetails,
    options
  } = props;
  const { t } = useTranslation();

  const onShowDetails = useCallback(() => {
    setShowDetails?.(!showDetails);
  }, [showDetails]);

  return (
    <Card>
      <CardMain show={showDetails}>
        <WrapperIcon>
          {priceIcon && <img src={PriceIcon} alt="Icon: PriceIcon" />}
          <p>{leftText}</p>
        </WrapperIcon>
        <div className="details" onClick={onShowDetails}>
          {details ? (
            <>
              <p>{t("card.details")}</p>
              {showDetails ? (
                <img className="pick_card_details_icon" src={ArrowUpIcon} alt="Icon: ArrowUpIcon" />
              ) : (
                <img
                  className="pick_card_details_icon"
                  src={ArrowDownIcon}
                  alt="Icon: ArrowDownIcon"
                />
              )}
            </>
          ) : (
            <p>{rightText}</p>
          )}
        </div>
      </CardMain>
      {showDetails && details && (
        <>
          {options?.map((el: IOption) => (
            <WrapperCenter key={el.id} className="card_items">
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
  );
};
const WrapperIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
const WrapperCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Card = styled.div`
  padding: 12px;
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
