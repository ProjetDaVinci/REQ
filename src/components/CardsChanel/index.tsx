import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectors, thunks } from "../../redux/ducks";
import { TelegramAkkItem } from "../../redux/ducks/telegramAkk/types";
import { AppDispatch } from "../../redux/store";
import CardChanel from "../../UI/CardChanel";
import CardKey from "../../UI/CardKey";
import SkeletonComponent from "../../UI/SceletonComponets";
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
  const [currentPage, setCurrentPage] = useState(30);
  const [fetching, setFetching] = useState(true);
  const dispatch = useDispatch<AppDispatch>();

  const cardServer = useSelector(selectors.information.SelectInfo);
  const isLoading = useSelector(selectors.information.SelectPending);

  useEffect(() => {
    dispatch(thunks.telegramAkk.getListTelegram());
    // dispatch(thunks.information.getInfoList());
  }, []);

  useEffect(() => {
    if (fetching) {
      dispatch(thunks.information.getInfoList(currentPage));

      console.log("fetching");
      setCurrentPage((prevState) => prevState + 20);
      setFetching(false);
    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = (
    e: React.KeyboardEvent<HTMLInputElement> & {
      target: HTMLInputElement;
    } & any
  ) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
      console.log("scroll");
    }
  };

  return (
    <>
      {isLoading
        ? [...Array(30)].map((item, index) => <SkeletonComponent key={index} />)
        : cardServer?.map((item, key) => (
            <CardChanel
              id={item.id}
              idTrub={item.truba_id}
              desctext={item.text}
              key={key}
            />
          ))}
    </>
  );
};

export default CardsKey;
