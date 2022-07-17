import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Board, Header } from "..";
import { navigation } from "../../constants";
import { actions } from "../../redux/ducks";
import { data, dataTikets } from "./data";
import styles from "./FilterSection.module.css";

const FilterSection = () => {
  const dispatch = useDispatch();
  const [categoryId, setCategoryid] = useState(0);

  const { pathname } = useRouter();

  const headers = navigation.find((item) => item.path === pathname);

  const onClickCategory = (key: number, item: string) => {
    setCategoryid(key);
    onAdd(item);
  };

  const onAdd = (text: string) => {
    dispatch(
      actions.filterPage.addFilter({
        namePage: headers?.path || "путь",
        itemName: text,
      })
    );
  };

  const onDeleteData = () => {
    dispatch(actions.filterPage.deleteFilter({ namePage: "text" }));
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
            {value}
          </button>
        ))}
      </div>
    </div>
  ) : (
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
            {value}
          </button>
        ))}
      </div>
      {data.length !== 0 ? (
        <button className={styles.filter_section_delete} onClick={onDeleteData}>
          Удалить все заявки в списке
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FilterSection;
