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
  return (
    <>
      {cardItem.map((item, key) => (
        <CardKey
          date={item.date}
          name={item.name}
          desctext={item.desctext}
          key={`${key}_${item.date}`}
        />
      ))}
    </>
  );
};

export default CardsKey;
