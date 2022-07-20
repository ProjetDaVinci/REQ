import Image from "next/image";
import * as React from "react";
import { FC, SVGProps, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Close, Dump, Like, Notification } from "../../icons";
import { actions, selectors, thunks } from "../../redux/ducks";
import { AppDispatch } from "../../redux/store";
import styles from "./Card.module.css";
import img from "./Weezy.png";
import { motion, AnimatePresence } from "framer-motion";

interface ICard {
  idTrub: number;
  id: number;
  date: string;
  status: string;
  desctext: string;
}

const Card: FC<ICard> = ({ date, status, desctext, id, idTrub }) => {
  const dispatch = useDispatch<AppDispatch>();

  const [numbersOfItems, setNumbers] = useState(80);
  const telegramCard = useSelector(selectors.telegramAkk.SelectTelegram);
  const filter = useSelector(selectors.filterPages.SelectFilter);

  const filtderTelegram = telegramCard.find((item) => item.id === idTrub);

  const dateLocal = new Date(date).toLocaleString();

  const onClose = () => {
    // не Одобренные
    dispatch(
      thunks.proposal.updateProposal({
        id,
        status: "Не одоренные заявки",
      })
    );
    dispatch(actions.proposal.changeProposal({ id, status: filter.namePage }));
  };

  const onLikesClick = () => {
    // Одобренные
    dispatch(
      thunks.proposal.updateProposal({ id, status: "Одоренные заявки" })
    );
    dispatch(actions.proposal.changeProposal({ id, status: filter.namePage }));
  };

  const onDump = () => {
    dispatch(thunks.proposal.deleteProposal(id));
    dispatch(actions.proposal.deleteProposal(id));
  };
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
                <Close onClick={onClose} />
                <Like onClick={onLikesClick} />
                <Dump onClick={onDump} />
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
          <AnimatePresence>
            {numbersOfItems === 80 ? (
              <motion.div
                initial={{ height: "auto" }}
                animate={{ height: 45 }}
                exit={{ height: "auto", opacity: 1 }}
                className="text-body-card-wrapper"
              >
                <span className="text-body-card">
                  {desctext.slice(0, numbersOfItems)}
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
                <span className="text-body-card">{desctext}</span>
              </motion.div>
            )}
          </AnimatePresence>
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

        <div className="card-footer p-4 pt-2 pb-2"></div>
      </div>
    </div>
  );
};

export default Card;
