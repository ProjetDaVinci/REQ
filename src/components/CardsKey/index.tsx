import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors, thunks } from "../../redux/ducks";
import { KlyuchevikiItem } from "../../redux/ducks/keys/types";
import { AppDispatch } from "../../redux/store";
import CardKey from "../../UI/CardKey";
import FormAdd from "../FormAdd";
import styles from "./Cards.module.css";
import Modal from "react-modal";
import { ModalCard } from "..";
import SkeletonComponent from "../../UI/SceletonComponets";

const CardsKey = () => {
  const dispatch = useDispatch<AppDispatch>();
  const filterGlobal = useSelector(selectors.filterPages.SelectFilter);
  const [setVisible, setIsVisible] = useState(false);
  const [idCard, setIdCard] = useState(-1);

  const cardServer = useSelector(selectors.keys.SelectKeys);
  const isLoading = useSelector(selectors.keys.SelectPending);

  useEffect(() => {
    dispatch(thunks.keys.getListKeys());
  }, []);

  const onChangeKey = (id: number) => {
    setIsVisible(true);
    setIdCard(id);
    console.log("====================================");
    console.log(id);
    console.log("====================================");
  };

  const changeClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      <ModalCard
        setVisible={setVisible}
        changeClose={changeClose}
        setIsVisible={setIsVisible}
        edit={true}
        id={idCard}
      />
      {isLoading
        ? [...Array(30)].map((item, index) => <SkeletonComponent key={index} />)
        : cardServer?.map((item, key) => (
            <CardKey
              id={item.id}
              name={item.name}
              stopword={item.stopword}
              key={`${key}_${item.name}`}
              word={item.word}
              exclude={item.exclude}
              onChangeKey={onChangeKey}
            />
          ))}
    </>
  );
};

export default CardsKey;
