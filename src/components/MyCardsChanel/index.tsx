import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectors, thunks } from "../../redux/ducks";
import { AppDispatch } from "../../redux/store";
import MyCard from "../../UI/MyCard";

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
const MyCardsChanel = () => {
  const dispatch = useDispatch<AppDispatch>();

  const cardServer = useSelector(selectors.telegramAkk.SelectTelegram);

  useEffect(() => {
    dispatch(thunks.telegramAkk.getListTelegram());
  }, [cardServer]);

  console.log("cardServer2", cardServer);

  return (
    <>
      {cardServer?.map((item, key) => (
        <MyCard
          date={item.create_at}
          name={item.name}
          desctext={item.description}
          subs={item.subscriber}
          key={key}
          photo={item.photo}
        />
      ))}
    </>
  );
};

export default MyCardsChanel;
