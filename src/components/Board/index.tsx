import Link from "next/link";
import { Logo } from "../../icons";
import styles from "./Board.module.css";
import { ContainerWrapper } from "./styles";

const Board = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_logo}>
        <Logo />
      </div>
      <div className={styles.content_wrapper}>
        <div className={styles.content_item_wrapper}>Board</div>
        <div className={styles.content_item_wrapper}>Board</div>
        <div className={styles.content_item_wrapper}>Board</div>
      </div>
    </div>
  );
};

export default Board;
