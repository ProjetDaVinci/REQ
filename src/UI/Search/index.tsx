import * as React from "react";
import { SVGProps } from "react";
import styles from "./Search.module.css";

const Search = () => {
  return <input className={styles.container} placeholder="Поищи здесь..." />;
};

export default Search;
