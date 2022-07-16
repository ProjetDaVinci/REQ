import * as React from "react";
import { FC, SVGProps } from "react";
import { Close, Dump, Like, Notification } from "../../icons";
import styles from "./Card.module.css";

interface ICard {
  date: string;
  name: string;
  desctext: string;
}

{
  /* <div classNameNameName={styles.container}>
      <div classNameNameName={styles.header}>
        <img
          src="Weezy.png"
          classNameNameName={styles.image}
          style={{ width: 68, height: 65, borderRadius: 12 }}
        />
        <div classNameNameName={styles.header_content}>
          <div style={{ marginTop: 5 }}>
            <p classNameNameName={styles.header_text}>{name} </p>
            <p classNameNameName={styles.header_text}>{date}</p>
          </div>

          <div classNameNameName={styles.header_icon}>
            <Close />
            <Like />
            <Dump />
          </div>
        </div>
      </div>
      <div classNameNameName={styles.content}>
        <p classNameNameName={styles.desc_text}>{desctext}</p>
      </div>
      <div classNameNameName={styles.footer}>
        <p classNameNameName={styles.show_more_text} style={{ textAlign: "end" }}>
          Показать ещё
        </p>
      </div>
    </div> */
}

const Card: FC<ICard> = ({ date, name, desctext }) => {
  return (
    <div className="col-xl-5 col-sm-6 mb-xl-5 mb-4">
      <div className="card bg-card">
        <div className="card-header bg-card p-3 pt-2">
          <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
            <i className="material-icons opacity-10">weekend</i>
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
              <p className="ml-75 mb-0 text-head-card ">Wezzy studio </p>
              <p className="ml-75 mb-0 text-head-card ">09.07.2022</p>
            </div>
          </div>
        </div>
        <div className="card-body">
          {/* <h6 className="mb-0 ">Website Views</h6> */}
          <span className="text-body-card"> {desctext}</span>
          {/* <p className="text-sm ">Last Campaign Performance</p>
          <hr className="dark horizontal" />
          <div className="d-flex ">
            <i className="material-icons text-sm my-auto me-1">schedule</i>
            <p className="mb-0 text-sm"> campaign sent 2 days ago </p>
          </div> */}
        </div>
        <hr className="dark horizontal my-0" />
        <div className="card-footer p-3">
          <p className="mb-0">
            <span className="text-success text-sm font-weight-bolder">
              +55%{" "}
            </span>
            than last week
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
