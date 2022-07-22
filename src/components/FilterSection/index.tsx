import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Board, Header, ModalCard } from "..";
import { navigation } from "../../constants";
import { actions, selectors, thunks } from "../../redux/ducks";
import { AppDispatch } from "../../redux/store";
import { data, dataTikets } from "./data";
import styles from "./FilterSection.module.css";
import Modal from "react-modal";
import FormAdd from "../FormAdd";

const FilterSection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const filterGlobal = useSelector(selectors.filterPages.SelectFilter);
  const index = data.findIndex((value) => value === filterGlobal.namePage);
  const [categoryId, setCategoryid] = useState(index || 0);
  const [setVisible, setIsVisible] = useState(false);

  const { pathname } = useRouter();

  const headers = navigation.find((item) => item.path === pathname);

  const onClickCategory = (key: number, item: string) => {
    setCategoryid(key);
    dispatch(actions.filterPages.selectFilter(item));

    dispatch(thunks.proposal.getProposalListCategory(item));
    // onAdd(item);
  };

  const changeClose = () => {
    setIsVisible(false);

    dispatch(actions.filterPages.onClose(false));
    // console.log("filterGlobal.onAddKey", filterGlobal.onAddKey);
  };

  const onAddKey = () => {
    dispatch(actions.filterPages.onAddKey(true));
    setIsVisible(true);
  };

  return headers?.path === "/tikets" ? (
    <div className={styles.filter_section_wrapper}>
      <div className={styles.filter_section_container}>
        {dataTikets.map((value, key) => (
          <button
            className={
              categoryId === key
                ? styles.filter_active
                : styles.filter_section_button
            }
            key={key}
          >
            <p>{value}</p>
          </button>
        ))}
      </div>
    </div>
  ) : headers?.path === "/" ? (
    <div className={styles.filter_section_wrapper}>
      <div className={styles.filter_section_container}>
        {data.map((value, key) => (
          <button
            className={
              categoryId === key
                ? styles.filter_active
                : styles.filter_section_button
            }
            key={key}
            onClick={() => onClickCategory(key, value)}
          >
            <p>{value}</p>
          </button>
        ))}
      </div>
      {data.length !== 0 ? (
        <button className={styles.filter_section_delete}>
          Удалить все заявки в списке
        </button>
      ) : (
        <></>
      )}
    </div>
  ) : headers?.path === "/keywords" ? (
    <>
      <ModalCard
        setVisible={setVisible}
        changeClose={changeClose}
        setIsVisible={setIsVisible}
        edit={false}
      />
      <div className={styles.filter_section_wrapper}>
        <div className={styles.filter_section_container}>
          <button className={styles.filter_section_button} onClick={onAddKey}>
            <p>Добавить +</p>
          </button>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default FilterSection;
