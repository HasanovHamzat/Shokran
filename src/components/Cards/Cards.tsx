import { CardCreate } from "./CardCreate/CardCreate";
import { CardAdd } from "./CardAdd/CardAdd";
import { CardVerify } from "./CardVerify/CardVerify";
import { CardError } from "./CardError/CardError";
import { CardSuccess } from "./CardSuccess/CardSuccess";
import { useState } from "react";
import { CardPick } from "./CardPick/CardPick";

export const Cards = () => {
  const [prevCard, setPrevCard] = useState(0);
  console.log({ prevCard });
  return (
    <>
    
      {prevCard === 0 && <CardCreate setPrevCard={setPrevCard} />}
      {prevCard === 1 && <CardAdd setPrevCard={setPrevCard} />}
      {prevCard === 2 && <CardPick setPrevCard={setPrevCard} />}
      {prevCard === 3 && <CardVerify setPrevCard={setPrevCard} />}
      {prevCard === 4 && <CardSuccess setPrevCard={setPrevCard} />}
      {prevCard === 5 && <CardError setPrevCard={setPrevCard} />}
    </>
  );
};
