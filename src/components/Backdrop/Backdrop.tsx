import React from "react";
import classes from "./Backdrop.module.scss";

interface IBackdrop {
  show?: boolean;
  color?: string;
  alpha?: boolean;
  onClick?: any;
  children?: React.ReactNode;
}

const defaultProps: IBackdrop = {
  show: true,
  color: "#00000",
  alpha: true,
  onClick: () => {},
};
const Backdrop: React.FC<IBackdrop> = ({
  show,
  color,
  alpha,
  onClick,
  children,
}) => {
  const alphaclass = alpha ? "backdrop-black" : "backdrop-black-noalpha";
  return show ? (
    <div
      className={`${classes["backdrop"]} ${classes[alphaclass]}`}
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </div>
  ) : null;
};

Backdrop.defaultProps = defaultProps;
export default Backdrop;
