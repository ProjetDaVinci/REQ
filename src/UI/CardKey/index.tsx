import Image from "next/image";
import * as React from "react";
import { FC, memo, SVGProps } from "react";
import { useDispatch } from "react-redux";
import { Close, Dump, Like, Notification } from "../../icons";
import { actions, thunks } from "../../redux/ducks";
import { KlyuchevikiItem } from "../../redux/ducks/keys/types";
import { AppDispatch } from "../../redux/store";
import styles from "./Card.module.css";

import img from "./Key.png";

interface ICard {
  name: string;
  date?: string;
  stopword: string;
  word: string;
  exclude: string;
  id: number;
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
            <Dump />
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <span className={styles.span_border}>Стоп слова</span>

        <p className={styles.desc_text}>{desctext}</p>
      </div>
      <div className={styles.footer}>
        <p className={styles.show_more_text} style={{ textAlign: "end" }}>
          Показать ещё
        </p>
      </div>
    </div> */
}

const CardKey: FC<ICard> = memo(
  ({ name, stopword, word, date, exclude, id }) => {
    const dispatch = useDispatch<AppDispatch>();

    const onDelete = (id: number) => {
      dispatch(thunks.keys.deleteKeys(id));
    };
    return (
      <div className="col-xl-4 col-sm-6 mb-xl-5 mb-4">
        <div className="card bg-card">
          <div className="card-header bg-card p-3 pb-1">
            <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
              <Image src={img} layout="fill" />
            </div>
            <div className=" pt-1">
              <p className="text-sm text-end mb-0 text-capitalize">
                <div className={styles.header_icon}>
                  <Dump onClick={() => onDelete(id)} />
                </div>
              </p>
              <div className="">
                {date ? (
                  <p className="ml-75 mb-0 text-head-card ">{date}</p>
                ) : (
                  <></>
                )}

                <p className="ml-75 mb-0 text-head-card ">{name}</p>
              </div>
            </div>
          </div>
          <div className="card-body p-4 pt-3 pb-0">
            <p className={styles.header_text}>{word} </p>

            <span className="text-body-card"> {stopword}</span>

            <div className={styles.footer}>
              <p className={styles.show_more_text} style={{ textAlign: "end" }}>
                Показать ещё
              </p>
              <hr className="hr-card-dark" />
            </div>
          </div>
          <div className="card-footer p-4 pt-2 pb-2"></div>
        </div>
      </div>
    );
  }
);

export default CardKey;
