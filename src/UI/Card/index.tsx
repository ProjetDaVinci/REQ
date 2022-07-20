import Image from "next/image";
import * as React from "react";
import { FC, SVGProps, useState } from "react";
import { useSelector } from "react-redux";
import { Close, Dump, Like, Notification } from "../../icons";
import { selectors } from "../../redux/ducks";
import styles from "./Card.module.css";
import img from "./Weezy.png";

interface ICard {
  id: number;
  date: string;
  status: string;
  desctext: string;
}

const Card: FC<ICard> = ({ date, status, desctext, id }) => {
  const [numbersOfItems, setNumbers] = useState(80);
  const telegramCard = useSelector(selectors.telegramAkk.SelectTelegram);

  const filtderTelegram = telegramCard.find((item) => item.id === id);

  const dateLocal = new Date(date).toLocaleString();
  return (
    <div className="col-xl-4 col-sm-6 mb-xl-5 mb-4">
      <div className="card bg-card">
        <div className="card-header bg-card p-3 pb-1">
          <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
            <img
              src={`https://app.teo-req.ru/${filtderTelegram?.photo}`}
              style={{ width: 64, height: 64, borderRadius: 12 }}
              alt=""
            />
          </div>
          <div className=" pt-1">
            <p className="text-sm text-end mb-0 text-capitalize">
              <div className={styles.header_icon}>
                <Close />
                <Like />
                <Dump />
              </div>
            </p>
            <div className="mt-m15 mh-16">
              <p className="ml-75 mb-0 text-head-card ">
                {filtderTelegram?.name}
              </p>
              <p className="ml-75 mb-0 text-head-card ">{dateLocal || null}</p>
            </div>
          </div>
        </div>
        <div className="card-body p-4 pt-3 pb-0">
          <p className={styles.header_text}>{status} </p>

          <div className="text-body-card-wrapper">
            <span className="text-body-card">
              {desctext.slice(0, numbersOfItems)}
            </span>
          </div>
          <div className={styles.footer}>
            {desctext.length > 80 ? (
              numbersOfItems === 80 ? (
                <p
                  className={styles.show_more_text}
                  style={{ textAlign: "end" }}
                  onClick={() => setNumbers(desctext.length)}
                >
                  Показать ещё
                </p>
              ) : (
                <p
                  className={styles.show_more_text}
                  style={{ textAlign: "end" }}
                  onClick={() => setNumbers(80)}
                >
                  Свернуть
                </p>
              )
            ) : (
              <div className={styles.show_more_text_non} />
            )}
            <hr className="hr-card-dark" />
          </div>
        </div>

        <div className="card-footer p-4 pt-2 pb-2">
          {/* <p className="mb-0">
            <span className="text-success text-sm font-weight-bolder">
              +55%{" "}
            </span>
            than last week
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
