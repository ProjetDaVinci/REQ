import { useState } from "react";
import { Board, Header } from "..";
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
  return (
    <>
      {cardItem.map((item, key) => (
        <Card
          date={item.date}
          name={item.name}
          desctext={item.desctext}
          key={key}
        />
      ))}
    </>
  );
};

export default Cards;
