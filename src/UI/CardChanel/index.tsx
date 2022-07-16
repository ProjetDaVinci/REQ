import * as React from "react";
import { FC, SVGProps } from "react";
import { Close, Draw, Dump, Like, Notification } from "../../icons";
import styles from "./Card.module.css";

interface ICard {
  date: string;
  name: string;
  desctext: string;
  subs: number;
}

const CardChanel: FC<ICard> = ({ date, name, desctext, subs }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img
          src="Weezy.png"
          className={styles.image}
          style={{ width: 68, height: 65, borderRadius: 12 }}
        />
        <div className={styles.header_content}>
          <div style={{ marginTop: 5 }}>
            <p className={styles.header_text}>{name} </p>
            <p className={styles.header_text}>{date}</p>
          </div>

          <div className={styles.header_icon}>
            <Draw />
            <Dump />
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <span className={styles.span_border}>Описание</span>

        <p className={styles.desc_text}>{desctext}</p>
      </div>
      <div className={styles.footer}>
        <p className={styles.show_more_text} style={{ textAlign: "end" }}>
          Показать ещё
        </p>
        <span className={styles.span_subs}>{subs} подписчиков</span>
      </div>
    </div>
  );
};

export default CardChanel;
