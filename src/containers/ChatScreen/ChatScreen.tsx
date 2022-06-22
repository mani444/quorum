import React, { useState } from "react";
import Chats from "./ChatComponents/Chats/Chats";
import ChatScreenHeader from "./ChatComponents/ChatScreenHeader/ChatScreenHeader";
import EventUsersSlot from "./ChatComponents/EventUsersSlot/EventUsersSlot";
import SendChat from "./ChatComponents/SendChat/SendChat";

import classes from "./ChatScreen.module.scss";

const ChatScreen = () => {
  const [isSmallHeader, setHeader] = useState(false);
  const handleChatFocus = () => {
    setHeader(true);
  };

  return (
    <div className={classes["container"]}>
      <ChatScreenHeader isSmallHeader={isSmallHeader} />
      <EventUsersSlot />
      <Chats isSmallHeader={isSmallHeader} />
      <SendChat handleChatFocus={handleChatFocus} />
    </div>
  );
};

export default ChatScreen;
