import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectors, thunks } from "../../redux/ducks";
import { AppDispatch } from "../../redux/store";
import MyCard from "../../UI/MyCard";

const MyCardsChanel = () => {
  const dispatch = useDispatch<AppDispatch>();

  const cardServer = useSelector(selectors.telegramAkk.SelectTelegram);

  useEffect(() => {
    dispatch(thunks.telegramAkk.getListTelegram());
  }, []);

  return (
    <>
      {cardServer?.map((item, key) => (
        <MyCard
          id={item.id}
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
