import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Board, Header } from "..";
import { navigation } from "../../constants";
import { actions, selectors } from "../../redux/ducks";
import { data, dataTikets } from "./data";
import styles from "./FilterSection.module.css";

const FilterSection = () => {
  const dispatch = useDispatch();
  const filterGlobal = useSelector(selectors.filterPages.SelectFilter);
  const index = data.findIndex((value) => value === filterGlobal.namePage);
  const [categoryId, setCategoryid] = useState(index || 0);

  const { pathname } = useRouter();

  const headers = navigation.find((item) => item.path === pathname);

  const onClickCategory = (key: number, item: string) => {
    setCategoryid(key);
    dispatch(actions.filterPages.selectFilter(item));
    // onAdd(item);
  };

  // const onAdd = (text: string) => {
  //   dispatch(
  //     actions.filterPage.addFilter({
  //       namePage: headers?.path || "путь",
  //       itemName: text,
  //     })
  //   );
  // };

  // const onDeleteData = () => {
  //   dispatch(actions.filterPage.deleteFilter({ namePage: "text" }));
  // };
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
            {value}
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
  ) : null;
};

export default FilterSection;
