import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectors, thunks } from "../../redux/ducks";
import { TelegramAkkItem } from "../../redux/ducks/telegramAkk/types";
import { AppDispatch } from "../../redux/store";
import CardChanel from "../../UI/CardChanel";
import CardKey from "../../UI/CardKey";
import styles from "./Cards.module.css";

const cardItem = [
  {
    date: "09.07.2022    13.40 мск",
    name: "Вкусно и точка",
    desctext:
      "Вакансия, ищем, о нас, ищет специалиста,предлагаем на, для своих, компания",
    subs: 6500,
  },
  {
    date: "01.07.2022    17.40 мск",
    name: "Green Forest ",
    desctext:
      "Вакансия, ищем, о нас, ищет специалиста,предлагаем на, для своих, компания",
    subs: 7500,
  },
  {
    date: "15.06.2022     08.25 мск",
    name: "Golata ",
    desctext:
      "Вакансия, ищем, о нас, ищет специалиста,предлагаем на, для своих, компания",
    subs: 2500,
  },
];
const CardsKey = () => {
  const dispatch = useDispatch<AppDispatch>();

  const cardServer = useSelector(selectors.information.SelectInfo);

  let mass: any[] = [];

  console.log("mass", mass);

  useEffect(() => {
    dispatch(thunks.telegramAkk.getListTelegram());
    dispatch(thunks.information.getInfoList());
  }, []);

  console.log("cardServer", cardServer);

  return (
    <>
      {cardServer?.map((item, key) => (
        <CardChanel id={item.truba_id} desctext={item.text} key={key} />
      ))}
    </>
  );
};

export default CardsKey;
