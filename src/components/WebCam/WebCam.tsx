import React from "react";
import Webcam from "react-webcam";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./WebCam.module.scss";
import cameraIcon from "../../assets/Icons/camera.png";
import { SAMPLE_MESSAGES } from "../../constants";

const videoConstraints = {
  facingMode: "user",
};
interface IWebCam {
  closeCamera: () => void;
}

const WebCam: React.FC<IWebCam> = ({ closeCamera }) => {
  const webcamRef: React.LegacyRef<Webcam> | undefined = React.useRef(null);

  const captureImage = React.useCallback(() => {
    if (webcamRef && webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      SAMPLE_MESSAGES.push({
        userName: "you",
        message: imageSrc?.toString() || "",
        type: "image",
      });
      closeCamera();
    }
  }, [webcamRef]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <Backdrop onClick={closeCamera}>
      <div
        className={classes["cameraContainer"]}
        onClick={(e) => e.stopPropagation()}
      >
        <Webcam
          className={classes["webCam"]}
          ref={webcamRef}
          audio={false}
          screenshotFormat={"image/png"}
          videoConstraints={videoConstraints}
        />
        <div className={classes["cameraContent"]}>
          <img
            src={cameraIcon}
            alt="icon"
            className={classes["takePicture"]}
            onClick={captureImage}
          />
        </div>
      </div>
    </Backdrop>
  );
};

export default WebCam;
