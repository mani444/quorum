import React from "react";

import classes from "./CreateEventHeader.module.scss";
import backIcon from "../../../../assets/Icons/back-icon.png";
import saveIcon from "../../../../assets/Icons/save.png";
import saveDisabledIcon from "../../../../assets/Icons/save-disable.png";
import { ButtonIcon } from "../../../../components/Button/Button";
import { useHistory } from "react-router-dom";
import { muiStyles } from "../../../../css/MuiStyles";

interface ICreateEventHeader {
  actions: {
    isSubmitting: boolean;
    isValid: boolean;
    dirty: boolean;
  };
}

const CreateEventHeader: React.FC<ICreateEventHeader> = ({ actions }) => {
  const history = useHistory();
  const muiStyle = muiStyles();
  const { isSubmitting, isValid, dirty } = actions;
  const isDisabled = !(isValid && dirty) || isSubmitting;

  return (
    <div className={classes["topBarContainer"]}>
      <ButtonIcon icon={backIcon} onClick={() => history.goBack()} />
      <div className={classes["title"]}>CREATE EVENT</div>
      <ButtonIcon
        icon={isDisabled ? saveDisabledIcon : saveIcon}
        muiClass={muiStyle.saveEventBtn}
        type={"submit"}
        disabled={isDisabled}
      />
    </div>
  );
};

export default CreateEventHeader;
