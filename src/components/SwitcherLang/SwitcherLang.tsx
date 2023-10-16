/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import styled from "styled-components";

import { useTranslation } from "react-i18next";
import { FormSelect } from "../../shared/ui/form/FormSelect";

export const SwitcherLang = () => {
  const [t, i18n] = useTranslation();
  const methods = useForm();

  const [language] = methods.watch(["language"]);
  console.log({ language });
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(() => null)}>
        <Div>
          <FormSelect
            name={"language"}
            options={[
              {
                id: "en",
                label: "English"
              },
              {
                id: "fr",
                label: "France"
              }
            ]}
            label={t("lang.interfaceLang")}
          />
        </Div>
      </form>
    </FormProvider>
  );
};
const Div = styled.div`
  width: 200px;
`;
