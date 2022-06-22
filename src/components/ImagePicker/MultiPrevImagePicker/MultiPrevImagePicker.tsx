import React, { useState } from "react";
import Slider from "react-slick";

import { GetFileSize } from "../../../utilities/Utils";
import classes from "./MultiPrevImagePicker.module.scss";

interface IImagePicker {
  value?: File[];
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
  name: string;
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const MultiPrevImagePicker: React.FC<IImagePicker> = ({
  setFieldValue,
  name,
  value = [],
}) => {
  const [mediaError, setMediaError] = React.useState("");
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const uploadMediaFile = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      setMediaError("");
      if (event.target.files && event.target.files.length > 0) {
        const files = Array.from(event.target.files) || [];
        files.forEach((file) => {
          const size = GetFileSize(file);
          if (size <= 5) {
            setFieldValue(name, [...value, ...files]);
            const currentImage = URL.createObjectURL(file);
            setSelectedImages((prev) => {
              return [...prev, currentImage];
            });
          } else {
            setMediaError("Error! Try again");
          }
        });
      }
    } catch (err) {
      setMediaError("Error! Try again");
      console.log("Error while uploading media file!");
    }
  };

  return (
    <>
      <div className={classes["mainContainer"]}>
        <Slider
          {...settings}
          className={selectedImages.length > 0 ? classes["carousel"] : ""}
        >
          {selectedImages.slice(0, 6).map((image, index) => {
            return (
              <img
                key={index}
                alt="not found"
                className={classes["uploadedPhoto"]}
                src={image}
              />
            );
          })}
        </Slider>
        {selectedImages?.length < 6 && (
          <label htmlFor="photo-upload" className={classes["addMore"]}>
            <span>+</span>
            <input
              className={classes["inputButton"]}
              accept={".png,.jpg,.jpeg"}
              id="photo-upload"
              type="file"
              onChange={uploadMediaFile}
              multiple
            />
          </label>
        )}
      </div>
      {mediaError && <p className={classes["error"]}>{mediaError}</p>}
    </>
  );
};

export default MultiPrevImagePicker;
