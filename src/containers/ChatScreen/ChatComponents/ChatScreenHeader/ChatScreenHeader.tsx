import React from "react";

import classes from "./ChatScreenHeader.module.scss";
import backIcon from "../../../../assets/Icons/back-icon.png";
import singleProfile from "../../../../assets/Icons/single-profile.png";
import settingsIcon from "../../../../assets/Icons/settings.png";
import groupImage from "../../../../assets/Images/bird.png";
import { useHistory } from "react-router-dom";

interface IChatScreenHeader {
  isSmallHeader: boolean;
}

const ChatScreenHeader: React.FC<IChatScreenHeader> = ({ isSmallHeader }) => {
  const history = useHistory();
  const getHeaderHeight = () => {
    if (isSmallHeader) return "calc(100vh - 80%) ";
    return "calc(100vh - 70%) ";
  };
  return (
    <div
      className={classes["chatHead"]}
      style={{
        height: getHeaderHeight(),
      }}
    >
      <img
        alt="groupImage"
        src={groupImage}
        className={classes["groupBackgroundImage"]}
      />
      <div
        className={classes["headerContent"]}
        style={{
          height: getHeaderHeight(),
        }}
      >
        <div className={classes["headerTopBar"]}>
          <div className={classes["headerProfileSection"]}>
            <img
              alt="icon"
              src={backIcon}
              className={classes["backIcon"]}
              onClick={() => {
                history.goBack();
              }}
            />
            <img
              alt="icon"
              src={singleProfile}
              className={classes["profileIcon"]}
            />
          </div>
          <img
            alt="icon"
            src={settingsIcon}
            className={classes["settingsIcon"]}
          />
        </div>
        <div className={classes["groupDetailsCard"]}>
          <div className={classes[classByHeight(isSmallHeader, true)]}>
            HDF Racing Club
          </div>
          <div className={classes[classByHeight(isSmallHeader)]}>
            Host: Felix Louis{" "}
          </div>
          <div className={classes[classByHeight(isSmallHeader)]}>
            130 Cole St, SF 94115
          </div>
          <div className={classes[classByHeight(isSmallHeader)]}>
            Thursday Nov 5th @6pm
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatScreenHeader;

const classByHeight = (isSmallHeader: boolean, title: boolean = false) => {
  if (isSmallHeader) {
    if (title) {
      return "detailCardNameSmall";
    } else {
      return "detailCardDescriptionSmall";
    }
  } else {
    if (title) {
      return "detailCardName";
    } else {
      return "detailCardDescription";
    }
  }
};
