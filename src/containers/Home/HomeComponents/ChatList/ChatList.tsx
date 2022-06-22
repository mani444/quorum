import React from "react";

import classes from "./ChatList.module.scss";
import singleProfile from "../../../../assets/Icons/single-profile.png";
import { SliceString } from "../../../../utilities/Utils";
import { CHAT_CARDS } from "../../../../constants";
import { useHistory } from "react-router-dom";
import { CHAT_SCREEN_ROUTE } from "../../../../routes/RoutesConstants";

const ChatList = () => {
  const history = useHistory();
  const handleChatClick = () => {
    history.push(CHAT_SCREEN_ROUTE);
  };
  return (
    <div className={classes["chatListContainer"]}>
      {CHAT_CARDS.map((chat, index) => {
        return <ChatSlot data={chat} key={index} onClick={handleChatClick} />;
      })}
    </div>
  );
};

export default ChatList;

interface IChatSlot {
  onClick: () => void;
  data: {
    icon: string;
    title: string;
    date: string;
    description: string;
  };
}

const ChatSlot: React.FC<IChatSlot> = ({ data, onClick }) => {
  return (
    <div className={classes["chatSlotContainer"]} onClick={onClick}>
      <div className={classes["chatSlotProfileSection"]}>
        <img
          alt="icon"
          src={data.icon || singleProfile}
          className={classes["profileIcon"]}
        />
      </div>
      <div className={classes["messageSection"]}>
        <div className={classes["messageHeader"]}>
          <div className={classes["title"]}>{SliceString(data.title, 25)}</div>
          <div className={classes["date"]}>{data.date}</div>
        </div>
        <div className={classes["description"]}>
          {SliceString(data.description, 70)}
        </div>
      </div>
    </div>
  );
};
