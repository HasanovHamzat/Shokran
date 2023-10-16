import "./CardSuccess.scss";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

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
  const dispatch = useDispatch();
  const onSubmit = (data: any) => {
    setPrevCard(4);

    console.log({ data });
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="main">
          <div className="logo">
            <img className="icon" src={logoDone} alt="Logo: Success" />
          </div>

          <WrapperHeader>
            <Title>{t("success.title")}</Title>
            <SubTitle>{t("success.subTitle")}</SubTitle>
          </WrapperHeader>
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
