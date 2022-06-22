import React, { useEffect, useRef } from "react";

import { SAMPLE_MESSAGES } from "../../../../constants";
import classes from "./Chats.module.scss";
import downIcon from "../../../../assets/Icons/down-arrow.png";
import { C_CHAT_TYPE } from "../../../../enums/Enums";

interface IChats {
  isSmallHeader: boolean;
}

interface IChatType {
  chat: { userName: string; message: string; type?: string | undefined };
}

const Chats: React.FC<IChats> = ({ isSmallHeader }) => {
  const chatRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    handleScrollToBottom();
  }, []);
  const handleScrollToBottom = () => {
    if (chatRef && chatRef.current)
      chatRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const getHeaderHeight = () => {
    if (isSmallHeader) return "calc((100vh - 20%) - 70px) ";
    return "calc((100vh - 30%) - 70px) ";
  };

  const RenderChatByType: React.FC<IChatType> = ({ chat }) => {
    switch (chat?.type) {
      case C_CHAT_TYPE.IMAGE:
        return (
          <img
            src={chat?.message}
            alt={"icon"}
            className={classes["chatImage"]}
          />
        );

      default:
        return <div className={classes["message"]}>{chat.message}</div>;
    }
  };
  return (
    <div
      className={classes["chatsContainer"]}
      style={{
        height: getHeaderHeight(),
        maxHeight: getHeaderHeight(),
      }}
    >
      <div className={classes["scrollToBottom"]} onClick={handleScrollToBottom}>
        <img
          src={downIcon}
          alt={"icon"}
          className={classes["scrollToBottomIcon"]}
        />
      </div>
      {SAMPLE_MESSAGES.map((chat, index) => {
        return (
          <div className={getMessageClassType(chat.userName)} key={index}>
            <div className={classes["userName"]}>{chat.userName}</div>
            <RenderChatByType chat={chat} />
          </div>
        );
      })}
      <div ref={chatRef} />
    </div>
  );
};

export default Chats;
const getMessageClassType = (userName: string) => {
  if (userName === "you") {
    return `${classes["messageBox"]} ${classes["rightIcon"]} ${classes["rightChat"]}`;
  }
  return `${classes["messageBox"]} ${classes["leftIcon"]} ${classes["leftChat"]}`;
};
