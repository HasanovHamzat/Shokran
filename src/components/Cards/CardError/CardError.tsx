import "./CardError.scss";
// import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import logoClose from "../../../shared/assets/icons/close.svg";
import { Trans, useTranslation } from "react-i18next";

import { FormProvider, useForm } from "react-hook-form";
import { Title, SubTitle } from "../../../shared/ui/common";
import { BaseButton } from "../../../shared/ui/form/BaseButton";
interface IProps {
  setPrevCard: (value: number) => void;
}
export const CardError = (props: IProps) => {
  const { setPrevCard } = props;
  const { t } = useTranslation();

  const methods = useForm();
  //   const dispatch = useDispatch();
  const onSubmit = (data: any) => {
    setPrevCard(6);

    // console.log({ data });
  };
  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="error">
          <WrapperHeader>
            <div className="logo_error">
              <img src={logoClose} alt="Logo: close" />
            </div>
            <div className="error_wrapper-title">
              <Title>{t("error.titleError")}</Title>
              <SubTitle>{t("error.subTitleError" )}
                {/* <Trans i18nKey="error.subTitleError" components={{ break: <br /> }} /> */}
              </SubTitle>
            </div>
          </WrapperHeader>
          <div onClick={reloadPage} className="btn">
            <BaseButton>{t("error.again")}</BaseButton>
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

  position: absolute;
  width: 300px;
  height: 200px;
  top: 50%;
  left: 50%;
  margin: -150px 0 0 -150px;
`;
