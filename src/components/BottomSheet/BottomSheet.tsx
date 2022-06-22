import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./BottomSheet.module.scss";

interface IBottomSheet
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  onCloseClick?: () => void;
  cardClasses?: string;
}

const BottomSheet: React.FC<IBottomSheet> = ({
  onCloseClick,
  cardClasses,
  children,
  ...rest
}) => {
  return (
    <Backdrop onClick={onCloseClick}>
      <div className={classes["container"]} {...rest}>
        <div
          className={`${classes["cardBody"]} ${cardClasses}`}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
        >
          {children}
        </div>
        <div className={classes["cancelButton"]} onClick={onCloseClick}>
          Cancel
        </div>
      </div>
    </Backdrop>
  );
};

export default BottomSheet;
