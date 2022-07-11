import Link from "next/link";
import { Logo } from "../../icons";
import styles from "./Board.module.css";
import { ContainerWrapper } from "./styles";

const Board = () => {
  return (
    <div className={styles.container}>
      <div>
        <Logo />
      </div>
      Board
    </div>
  );
};

export default Board;
