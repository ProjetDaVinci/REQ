import { useState } from "react";
import { Board, Header } from "..";
import { data } from "./data";
import styles from "./FilterSection.module.css";

const FilterSection = () => {
  const [categoryId, setCategoryid] = useState(0);

  const onClickCategory = (key: number) => {
    setCategoryid(key);
  };

  const onDeleteData = () => {};
  return (
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
            onClick={() => onClickCategory(key)}
          >
            {value}
          </button>
        ))}

        {/* <Header /> */}
        {/* {children} */}
        {/* <Footer /> */}
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
