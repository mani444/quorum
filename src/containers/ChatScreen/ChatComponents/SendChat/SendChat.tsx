import React, { useState } from "react";

import { ButtonIcon } from "../../../../components/Button/Button";
import classes from "./SendChat.module.scss";
import plusIcon from "../../../../assets/Icons/plus.png";
import cameraIcon from "../../../../assets/Icons/camera.png";
import micIcon from "../../../../assets/Icons/mic.png";
import Input from "../../../../components/Input/Input";
import stickerIcon from "../../../../assets/Icons/sticker.png";
import { muiStyles } from "../../../../css/MuiStyles";
import Attachments from "../Attachments/Attachments";
import WebCam from "../../../../components/WebCam/WebCam";

interface ISendChat {
  handleChatFocus: () => void;
}

const SendChat: React.FC<ISendChat> = ({ handleChatFocus }) => {
  const muiStyle = muiStyles();
  const [chatBar, setChatBar] = useState<string>("");
  const [showAttachment, setShowAttachment] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const handleShowCard = () => {
    setShowAttachment(true);
  };
  const handleHideCard = () => {
    setShowAttachment(false);
  };

  const handleChatBar = (value: string) => {
    setChatBar(value);
  };
  const closeCamera = () => {
    setShowCamera(false);
  };
  return (
    <div className={classes["container"]}>
      {showCamera && <WebCam closeCamera={closeCamera} />}
      {showAttachment && <Attachments handleHideCard={handleHideCard} />}
      <ButtonIcon icon={plusIcon} onClick={handleShowCard} />
      <div className={classes["inputWrapper"]}>
        <Input
          rightIcon={stickerIcon}
          muiClass={muiStyle.chatInput}
          value={chatBar}
          onChange={(e) => {
            handleChatBar(e.target.value);
          }}
          onFocus={handleChatFocus}
        />
      </div>
      <ButtonIcon icon={cameraIcon} onClick={() => setShowCamera(true)} />
      <ButtonIcon icon={micIcon} />
    </div>
  );
};

export default SendChat;
