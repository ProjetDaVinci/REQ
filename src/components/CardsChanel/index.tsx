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
  return (
    <div className={styles.content_wrapper}>
      {cardItem.map((item, key) => (
        <CardChanel
          date={item.date}
          name={item.name}
          desctext={item.desctext}
          subs={item.subs}
          key={key}
        />
      ))}
    </div>
  );
};

export default CardsKey;
