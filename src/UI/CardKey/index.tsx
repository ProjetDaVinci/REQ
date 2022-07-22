import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import * as React from "react";
import { FC, memo, SVGProps, useState } from "react";
import { useDispatch } from "react-redux";
import { Close, Draw, Dump, Like, Notification } from "../../icons";
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
  onChangeKey: (id: number) => void;
}

const CardKey: FC<ICard> = memo(
  ({ name, stopword, word, date, exclude, id, onChangeKey }) => {
    const dispatch = useDispatch<AppDispatch>();
    const [numbersOfItems, setNumbers] = useState(80);

    const onDelete = (id: number) => {
      dispatch(thunks.keys.deleteKeys(id));
      dispatch(actions.keys.deleteKeys(id));
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
                  <Draw onClick={() => onChangeKey(id)} />
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

            <AnimatePresence>
              {numbersOfItems === 80 ? (
                <motion.div
                  initial={{ height: "auto" }}
                  animate={{ height: 45 }}
                  exit={{ height: "auto", opacity: 1 }}
                  className="text-body-card-wrapper"
                >
                  <span className="text-body-card">
                    {stopword.slice(0, numbersOfItems)}
                  </span>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ height: 45 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 45, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-body-card-wrapper"
                >
                  <span className="text-body-card">{stopword}</span>
                </motion.div>
              )}
            </AnimatePresence>
            <div className={styles.footer}>
              {stopword.length > 80 ? (
                numbersOfItems === 80 ? (
                  <p
                    className={styles.show_more_text}
                    style={{ textAlign: "end" }}
                    onClick={() => setNumbers(stopword.length)}
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
          <div className="card-footer p-4 pt-2 pb-2"></div>
        </div>
      </div>
    );
  }
);

export default CardKey;
