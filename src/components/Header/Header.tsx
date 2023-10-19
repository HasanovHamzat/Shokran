import logo from "../../shared/assets/icons/logo.svg";
import usa from "../../shared/assets/flags/usa.svg";
import france from "../../shared/assets/flags/france.svg";
import styled from "styled-components";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import "./header.scss";
export const Header = () => {
  const [i18n] = useTranslation();
  const language = useMemo(
    () => [
      {
        id: 1,
        code: "en",
        label: "English"
      },
      {
        id: 2,
        code: "fr",
        label: "France"
      }
    ],
    []
  );
  const [lang, setLang] = useState(language[0].code);

  const onChnageLanguage = () => {
    if (lang === language[0].code) {
      setLang(language[1].code);
    } else {
      setLang(language[0].code);
    }
  };

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [i18n, lang]);
  return (
    <header className="header">
      <img src={logo} alt="Icon: logo" className="app-icon" />
      <Flag
        onClick={onChnageLanguage}
        src={lang === language[0].code ? usa : france}
        alt="Icon: logo"
        className="lang-icon"
      />
    </header>
  );
};
const Flag = styled.img`
  width: 30px;
  border-radius: 50%;
  height: 30px;
`;
