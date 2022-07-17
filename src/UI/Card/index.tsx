import Image from "next/image";
import * as React from "react";
import { FC, SVGProps } from "react";
import { Close, Dump, Like, Notification } from "../../icons";
import styles from "./Card.module.css";
import img from "./Weezy.png";

interface ICard {
  date: string;
  name: string;
  desctext: string;
}

const Card: FC<ICard> = ({ date, name, desctext }) => {
  return (
    <div className="col-xl-4 col-sm-6 mb-xl-5 mb-4">
      <div className="card bg-card">
        <div className="card-header bg-card p-3 pb-1">
          <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
            <Image src={img} layout="fill" />
          </div>
          <div className=" pt-1">
            <p className="text-sm text-end mb-0 text-capitalize">
              <div className={styles.header_icon}>
                <Close />
                <Like />
                <Dump />
              </div>
            </p>
            <div className="mt-m15">
              <p className="ml-75 mb-0 text-head-card ">{name}</p>
              <p className="ml-75 mb-0 text-head-card ">{date}</p>
            </div>
          </div>
        </div>
        <div className="card-body p-4 pt-3 pb-0">
          <span className="text-body-card"> {desctext}</span>

          <div className={styles.footer}>
            <p className={styles.show_more_text} style={{ textAlign: "end" }}>
              Показать ещё
            </p>
            <hr className="hr-card-dark" />
          </div>
        </div>

        <div className="card-footer p-4 pt-2 pb-2">
          {/* <p className="mb-0">
            <span className="text-success text-sm font-weight-bolder">
              +55%{" "}
            </span>
            than last week
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
