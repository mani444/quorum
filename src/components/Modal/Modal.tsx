import React from "react";

import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.module.scss";
import closeIcon from "../../assets/Icons/close.png";

interface IModal {
  onClick?: () => void;
  children?: React.ReactNode;
}
const Modal: React.FC<IModal> = ({ onClick, children }) => {
  return (
    <Backdrop onClick={onClick}>
      <div
        className={classes["modalContainer"]}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <img
          src={closeIcon}
          alt="icon"
          className={classes["closeIcon"]}
          onClick={onClick}
        />
        {children}
      </div>
    </Backdrop>
  );
};

export default Modal;
