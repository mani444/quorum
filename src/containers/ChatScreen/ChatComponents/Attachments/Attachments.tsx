import React from "react";

import BottomSheet from "../../../../components/BottomSheet/BottomSheet";
import { Bottom_Sheet_Data } from "../../../../constants";
import classes from "./Attachments.module.scss";

interface IAttachment {
  handleHideCard?: () => void;
}

const Attachments: React.FC<IAttachment> = ({ handleHideCard }) => {
  return (
    <BottomSheet
      onCloseClick={handleHideCard}
      cardClasses={classes["bottomSheet"]}
    >
      {Bottom_Sheet_Data.map(({ icon, title }, index) => {
        return (
          <div className={classes["slotContainer"]} key={index}>
            <img alt="icon" src={icon} className={classes["slotIcon"]} />
            <div className={classes["slotTitle"]}>{title}</div>
          </div>
        );
      })}
    </BottomSheet>
  );
};

export default Attachments;
