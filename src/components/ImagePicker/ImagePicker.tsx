import React, { useState } from "react";
import { GetFileSize } from "../../utilities/Utils";
import classes from "./ImagePicker.module.scss";

interface IImagePicker {
  value?: string;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
  name: string;
}

const ImagePicker: React.FC<IImagePicker> = ({
  value,
  setFieldValue,
  name,
}) => {
  const [mediaError, setMediaError] = React.useState("");
  const [selectedImage, setSelectedImage] = useState<string>("");

  const uploadMediaFile = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      setMediaError("");
      if (event.target.files && event.target.files.length > 0) {
        const file = event.target.files[0];
        const size = GetFileSize(file);
        if (size <= 10) {
          setFieldValue(name, file);
          setSelectedImage(URL.createObjectURL(event?.target?.files[0]));
        } else {
          setMediaError("Error! Try again");
        }
      }
    } catch (err) {
      setMediaError("Error! Try again");
      console.log("Error while uploading media file!");
    }
  };

  return (
    <div className={classes["mainContainer"]}>
      <label
        htmlFor="photo-upload"
        className={classes[selectedImage ? "addIcon" : "photo-upload"]}
      >
        {selectedImage ? (
          <img
            alt="not found"
            className={classes["photo-upload"]}
            src={selectedImage}
          ></img>
        ) : (
          <p>Add Photo</p>
        )}
        <input
          className={classes["inputButton"]}
          accept={".png,.jpg,.jpeg"}
          id="photo-upload"
          type="file"
          onChange={uploadMediaFile}
        />
      </label>
      {mediaError && <p className={classes["error"]}>{mediaError}</p>}
    </div>
  );
};

export default ImagePicker;
