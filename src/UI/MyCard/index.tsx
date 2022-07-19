import Image from "next/image";
import * as React from "react";
import { FC, SVGProps } from "react";
import { useSelector } from "react-redux";
import { API_URL } from "../../constants";
import { Close, Draw, Dump, Like, Notification } from "../../icons";
import { selectors } from "../../redux/ducks";
import styles from "./Card.module.css";

interface ICard {
  date: string;
  name: string;
  desctext: string;
  subs: number;
  photo: string;
}

{
  /* <div className={styles.container}>
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
</div>; */
}

const MyCard: FC<ICard> = ({ date, name, desctext, subs, photo }) => {
  return (
    <div className="col-xl-4 col-sm-6 mb-xl-5 mb-4">
      <div className="card bg-card">
        <div className="card-header bg-card p-3 pb-1">
          <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
            <img src={`${API_URL}/${photo}`} alt="" />
            {/* <Image src={`${API_URL}/${photo}`} layout="fill" /> */}
          </div>
          <div className=" pt-1">
            <p className="text-sm text-end mb-0 text-capitalize">
              <div className={styles.header_icon}>
                <Draw />
                <Dump />
              </div>
            </p>
            <div className="mt-m15">
              <p className="ml-75 mb-0 text-head-card ">{name}</p>
              {/* <p className="ml-75 mb-0 text-head-card ">{date}</p> */}
            </div>
          </div>
        </div>
        <div className="card-body p-4 pt-3 pb-0">
          <span className="text-body-card"> {desctext}</span>

          <div className={styles.footer}>
            <p className={styles.show_more_text} style={{ textAlign: "end" }}>
              Показать ещё
            </p>
            <hr className="hr-card-dark" />
          </div>
        </div>

        <div className="card-footer p-4 pt-2 pb-2">
          <p className={`mb-0 ${styles.span_subs}`}>
            <span className={styles.span_subs}>{subs} </span>
            подписчиков
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
