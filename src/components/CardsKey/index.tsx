import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectors, thunks } from "../../redux/ducks";
import { KlyuchevikiItem } from "../../redux/ducks/keys/types";
import { AppDispatch } from "../../redux/store";
import CardKey from "../../UI/CardKey";
import styles from "./Cards.module.css";

const cardItem = [
  {
    date: "09.07.2022",
    name: "Ключевик",
    desctext:
      "Вакансия, ищем, о нас, ищет специалиста,предлагаем на, для своих, компания",
  },
  {
    date: "09.07.2022",
    name: "Ключевик ",
    desctext:
      "Вакансия, ищем, о нас, ищет специалиста,предлагаем на, для своих, компания",
  },
  {
    date: "09.07.2022",
    name: "Ключевик ",
    desctext:
      "Вакансия, ищем, о нас, ищет специалиста,предлагаем на, для своих, компания",
  },
];

const CardsKey = () => {
  const dispatch = useDispatch<AppDispatch>();

  const cardServer = useSelector(selectors.keys.SelectKeys);

  useEffect(() => {
    dispatch(thunks.keys.getListKeys);
  }, [cardServer]);

  console.log("cardServer", cardServer);

  return (
    <>
      {cardServer?.map((item, key) => (
        <CardKey
          id={item.id}
          name={item.name}
          stopword={item.stopword}
          key={`${key}_${item.name}`}
          word={item.word}
          exclude={item.exclude}
        />
      ))}
    </>
  );
};

export default CardsKey;
