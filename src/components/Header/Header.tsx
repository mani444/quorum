import React from "react";

import classes from "./Header.module.scss";
import singleProfile from "../../assets/Icons/single-profile.png";
import settingsIcon from "../../assets/Icons/settings.png";

const Header = () => {
  return (
    <div className={classes["headerContainer"]}>
      <div className={classes["profileSection"]}>
        <img
          src={singleProfile}
          alt="profile"
          className={classes["profileIcon"]}
        />
        <div className={classes["title"]}>QUORUM</div>
      </div>
      <div className={classes["settingSection"]}>
        <img
          src={settingsIcon}
          alt="profile"
          className={classes["settingIcon"]}
        />
      </div>
    </div>
  );
};

export default Header;
