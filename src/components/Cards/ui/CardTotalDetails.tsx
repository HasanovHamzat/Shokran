/* eslint-disable react-refresh/only-export-components */
import styled from "styled-components";
import ArrowUpIcon from "../../../shared/assets/icons/arrow-up.svg";
import ArrowDownIcon from "../../../shared/assets/icons/arrow-down.svg";
import { useTranslation } from "react-i18next";
import { useCallback, useState } from "react";

interface IProduct {
  id: number;
  label: string;
  price: number;
  color: string;
  size: number;
  img: string;
}
interface IProps {
  product?: IProduct[];
}
export const CardTotalDetails = (props: IProps) => {
  const { product } = props;
  const { t } = useTranslation();
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const onShowDetails = useCallback(() => {
    setShowDetails(!showDetails);
  }, [showDetails]);
  const fullPrice = product?.reduce((acc, cur: IProduct) => acc + cur.price, 0);
  return (
    <Card>
      <WrapperMain>
        <Total className="pick_wrapper-total__main-title">
          {t("card.total")}&nbsp;({product?.length}&nbsp;{t("card.item")})
        </Total>
        <WrapperPriceAndDetails show={showDetails}>
          <Total>${fullPrice}</Total>
          <WrapperDetails onClick={onShowDetails}>
            <Details>{t("card.details")}</Details>
            <img
              className="pick_card_details_icon"
              src={showDetails ? ArrowUpIcon : ArrowDownIcon}
              alt="Icon: ArrowUpIcon"
            />
          </WrapperDetails>
        </WrapperPriceAndDetails>
      </WrapperMain>

      {showDetails && (
        <WrapperProduct>
          {product?.map((product: IProduct) => (
            <WrapperCenter key={product.id}>
              <ProductLeftBlock>
                <ProductTitle className="card_subtitle">{product.label}</ProductTitle>
                <ProductDecr className="card_subtitle">
                  {t("success.colour")}:&nbsp;{product.color}
                </ProductDecr>

                <ProductDecr className="card_subtitle">
                  {t("success.size")}:&nbsp;{product.size}
                </ProductDecr>
              </ProductLeftBlock>
              <div>
                <Img src={product.img} alt="icon" />
              </div>
            </WrapperCenter>
          ))}
        </WrapperProduct>
      )}
    </Card>
  );
};
const ProductLeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  min-width: 223px;
  max-width: 600px;
`;
const WrapperMain = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
const WrapperCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const WrapperPriceAndDetails = styled.div<{ show: boolean }>`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ show }) => (show ? "15px" : 0)};
`;
const WrapperDetails = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: end;
`;
const WrapperProduct = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Card = styled.div`
  padding: 12px;
  border-radius: 12px;
  background: #f9f9f9;
  gap: 12px;
`;

const Total = styled.p`
  color: #222122;

  font-feature-settings:
    "clig" off,
    "liga" off;
  /* Body 17/Medium */
  font-family:  "Rubik", sans-serif;

  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 117.647% */
`;
const ProductTitle = styled.p`
  color: var(--Black, #222122);
  font-family:  "Rubik", sans-serif;

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;
const ProductDecr = styled.p`
  color: var(--grey-700, #838687);
  font-feature-settings:
    "clig" off,
    "liga" off;
  /* Caption/Help text */
  font-family:  "Rubik", sans-serif;

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;
const Details = styled.p`
  color: var(--grey-700, #838687);
  text-align: right;
  font-feature-settings:
    "clig" off,
    "liga" off;
  /* Button/Extra Small */
  font-family:  "Rubik", sans-serif;

  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 15px;
`;

const Img = styled.img`
  border-radius: 8px;
  background: lightgray -1.516px -33.381px / 104.996% 143.568% no-repeat;
  width: 72px;
  height: 76px;
`;
