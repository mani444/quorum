import React from "react";
import styles from "./Spinner.module.scss";
import classes from "./CircularSpinner.module.scss";
import Backdrop from "../Backdrop/Backdrop";

interface SpinnerProps {
  lightBg?: boolean;
}

const Spinner: React.FunctionComponent<SpinnerProps> = ({ lightBg }) => {
  const colorStyles = {
    background: lightBg ? "#2F4050" : "white",
  };

  return (
    <div className={styles.spinner}>
      <div className={styles.bounce1} style={colorStyles} />
      <div className={styles.bounce2} style={colorStyles} />
      <div className={styles.bounce3} style={colorStyles} />
    </div>
  );
};

export default Spinner;

interface ICircularSpinner extends React.HTMLAttributes<HTMLDivElement> {
  backdropAlpha?: boolean;
}
export const CircularSpinner: React.FC<ICircularSpinner> = ({
  backdropAlpha,
}) => {
  return (
    <Backdrop alpha={backdropAlpha}>
      <div className={classes["loader"]}>Loading...</div>
    </Backdrop>
  );
};

export const CircularLoader: React.FC<ICircularSpinner> = ({ className }) => {
  return <div className={`${classes["loader"]} ${className}`}>.</div>;
};
