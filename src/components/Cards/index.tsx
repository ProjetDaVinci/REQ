import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Board, Header } from "..";
import { selectors, thunks } from "../../redux/ducks";
import { AppDispatch } from "../../redux/store";
import { Card } from "../../UI";
import styles from "./Cards.module.css";

const cardItem = [
  {
    date: "09.07.2022",
    name: "Wezzy studio ",
    desctext:
      "ВСУ набирают в бригады заключенных из-за потерь заявило Минобороны России",
  },
  {
    date: "09.07.2022",
    name: "Wezzy studio ",
    desctext:
      "На железной дороге в Брянской области сработало взрывное устройство",
  },
  {
    date: "09.07.2022",
    name: "Wezzy studio ",
    desctext:
      "Силы ЛНР и России продвигаются в сторону Северска, Артемовска, Соледара",
  },
];
const Cards = () => {
  const dispatch = useDispatch<AppDispatch>();

  const cardServer = useSelector(selectors.proposal.SelectPoposal);
  const filter = useSelector(selectors.filterPages.SelectFilter);

  let filtredItems = cardServer.filter(
    (item) => item.status === (filter?.namePage ? filter.namePage : "Новая")
  );

  useEffect(() => {
    dispatch(thunks.proposal.getProposalList());
  }, []);

  return (
    <>
      {filtredItems?.map((item, key) => (
        <Card
          idTrub={item.truba_id}
          id={item.id}
          date={item.create_at}
          status={item.status}
          desctext={item.text}
          key={key}
        />
      ))}
    </>
  );
};

export default Cards;
