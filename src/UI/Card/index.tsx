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
  const [change, setChange] = useState(false);
  const [inputTags, setInputTags] = useState("");
  const [mass, setMass] = useState<string[]>([]);
  const telegramCard = useSelector(selectors.telegramAkk.SelectTelegram);
  const filter = useSelector(selectors.filterPages.SelectFilter);

  // const reduxTags = useSelector(selectors.tags.selectTagsMass(id));
  const selectTags = useSelector(selectors.tagsCard.selectTagsMass(id));
  console.log("====================================");
  // console.log("reduxTags", reduxTags);
  console.log("selectTags", selectTags);
  console.log("====================================");

  const filtderTelegram = telegramCard?.find((item) => item.id === idTrub);

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
  let massTags: any[] = [];

  const onAddTags = () => {
    console.log("inputTags", inputTags);
    // massTags.pop(inputTags);
    // massTags.push(inputTags);
    dispatch(actions.tagsCard.addTags({ id, name: inputTags }));

    // let zametki = selectTags?.join();
    dispatch(thunks.tagsCard.updatesTagsProposal(id));
    setInputTags("");
    setChange(false);
    console.log("mass", mass);
  };

  const deleteTags = (item: string) => {
    dispatch(actions.tagsCard.deleteTags({ id, name: item }));
    dispatch(thunks.tagsCard.updatesTagsProposal(id));

    // const index: string[] = mass.filter((n) => n !== item);
    // setMass(index);
  };
  console.log("mass2", mass);

  return (
    <div className="col-xl-4 col-sm-6 mb-xl-5 mb-4">
      <div className="card bg-card">
        <div className="card-header bg-card p-3 pb-1">
          <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
            {filtderTelegram?.photo && (
              <img
                src={`https://app.teo-req.ru/${filtderTelegram?.photo}`}
                style={{ width: 64, height: 64, borderRadius: 12 }}
                alt=""
              />
            )}
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
                {filtderTelegram?.name && filtderTelegram?.name.length > 35
                  ? `${filtderTelegram?.name.slice(0, 35)}...`
                  : filtderTelegram?.name}
              </p>
              <p className="ml-75 mb-0 text-head-card ">{dateLocal || null}</p>
            </div>
          </div>
        </div>
        <div className="card-body p-4 pt-3 pb-0">
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

        <div className="card-footer p-4 pt-2 pb-2">
          <button
            className={styles.tags_buttons}
            onClick={() => setChange(!change)}
          >
            <Close onClick={() => setChange(!change)} />
          </button>
          {change ? (
            <>
              <input
                className={styles.input_tags}
                type="text"
                value={inputTags}
                placeholder="Новый тэг"
                onChange={(event) => setInputTags(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    console.log("Enter");
                    onAddTags();
                  }
                }}
              />
              <button
                type="submit"
                className={styles.tags_buttons}
                onClick={onAddTags}
              >
                добавить
              </button>
            </>
          ) : null}
          {selectTags?.map((item, key) => (
            <div className={styles.tags_block} key={key}>
              {item} <Close onClick={() => deleteTags(item)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
