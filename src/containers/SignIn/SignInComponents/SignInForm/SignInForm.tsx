import { RadioGroup } from "@mui/material";
import isMatchWithOptions from "date-fns/esm/fp/isMatchWithOptions/index.js";
import { Formik } from "formik";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ButtonComponent from "../../../../components/Button/Button";
import Dropdown from "../../../../components/Dropdown/Dropdown";
import MultiPrevImagePicker from "../../../../components/ImagePicker/MultiPrevImagePicker/MultiPrevImagePicker";
import RadioWithText from "../../../../components/RadioButton/RadioButton";
import { CircularSpinner } from "../../../../components/Spinner/Spinner";
import {
  CREATE_PROFILE_INPUTS,
  INTRUSTED_GROUP_NAMES,
} from "../../../../constants";
import { AuthContext } from "../../../../context/Auth/AuthContext";
import { muiStyles } from "../../../../css/MuiStyles";
import { E_GENDER_Type } from "../../../../enums/Enums";
import { createProfileInitialValues } from "../../../../initialValues/CreateProfileInitialValues";
import { ICategory, IProfile } from "../../../../interfaces/interfaces";
import { HOME_ROUTE } from "../../../../routes/RoutesConstants";
import FirebaseDBService from "../../../../services/FirebaseDB/FirebaseDBService/FirebaseDBService";
import { uploadImageToFirebase } from "../../../../utilities/Utils";
import CreateProfileValidation from "../../../../validations/CreateProfileValidations";
import { InputWithError } from "../../../CreateEvent/CreateEventComponents/CreateEventForm/CreateEventForm";
import classes from "./SignInForm.module.scss";

interface IOptions {
  [key: string]: string;
}

const SignInForm = () => {
  const authContext = useContext(AuthContext);
  const muiStyle = muiStyles();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categoryList, setCategoryList] = useState<ICategory[]>([]);
  const [categoryOptions, setCategoryOptions] = useState<IOptions[]>([]);

  useEffect(() => {
    if (authContext.checkAuthentication()) {
      history.push(HOME_ROUTE);
      return;
    }
  }, []); 

  useEffect(() => {
    const getAllCategories = async () => {
      try {
        setIsLoading(true);
        const categories = await FirebaseDBService().GetAllCategories();

        setCategoryList(categories);
      } catch (err) {
        console.log("Error while fetching categories", err);
      }

      setIsLoading(false);
    };
    getAllCategories();
  }, []); 

  useEffect(() => {
    const categoryObject = getOptionsMap();
    setCategoryOptions(categoryObject);
  }, [categoryList]); 

  const getOptionsMap = () => {
    let categoryObject: IOptions[] = [];

    categoryList.forEach((category) => {
      categoryObject.push( {[category.id as string]: category.name});
    });
    console.log("categoryOptions",categoryObject);

    return categoryObject;
  };

  const uploadImages = async (values: IProfile) => {
    const imageFiles = [...values.images.slice(0, 6)];
    if (imageFiles.length <= 0) return;
    try {
      const urls = imageFiles.map(async (image) => {
        return await uploadImageToFirebase("users", image);
      });
      const imageURLs = await Promise.all(urls);
      return imageURLs;
    } catch (err) {
      console.log("Error while uploading File", err);
    }
  };

  const createUserObject = async (values: IProfile) => {
    try {
      const files = await uploadImages(values);
      return {
        username: values.username,
        contact: values.contact,
        occupation: values.occupation,
        hobby: values.hobby,
        gender: values.gender,
        favoriteGroups: [...values.favoriteGroups],
        images: [...(files || [])],
      };
    } catch (err) {
      throw err;
    }
  };

  const handleClick = async (values: IProfile) => {
    try {
      setIsLoading(true);
      const userObject = await createUserObject(values);
      console.log("userObject", userObject);
      authContext.authenticateUser("token");
      history.push(HOME_ROUTE);
    } catch (err) {
      console.log("error while creating event", err);
    }
    setIsLoading(false);
  };

  return (
    <Formik
      initialValues={{ ...createProfileInitialValues() }}
      validationSchema={CreateProfileValidation}
      onSubmit={handleClick}
    >
      {({
        values,
        handleChange,
        handleSubmit,
        handleBlur,
        isSubmitting,
        setFieldValue,
        isValid,
        dirty,
      }) => {
        return (
          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            style={{ width: "90%" }}
          >
            {isLoading && <CircularSpinner></CircularSpinner>}
            <div className={classes["loginForm"]}>
              <div className={classes["addImages"]}>
                <div className={classes["addImagesTitle"]}>
                  Add Images-
                  <span style={{ color: "red", fontSize: "0.8em" }}>
                    (min-4)
                  </span>
                </div>
                <MultiPrevImagePicker
                  setFieldValue={setFieldValue}
                  name={"images"}
                  value={values.images}
                />
              </div>
              {CREATE_PROFILE_INPUTS.map((input, index) => {
                const value = values[input.name as keyof IProfile];
                return (
                  <InputWithError
                    key={index}
                    label={input.label}
                    name={input.name}
                    value={value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                );
              })}
              <div className={classes["radioSection"]}>
                <div className={classes["genderLabel"]}>Gender:</div>
                <RadioGroup
                  aria-label="gender"
                  row
                  name="gender"
                  value={values.gender}
                  onChange={handleChange}
                >
                  <RadioWithText
                    muiClass={muiStyle.radioText}
                    radioClasses={muiStyle.radioIcon}
                    title="Male"
                    value={E_GENDER_Type.MALE}
                  />
                  <RadioWithText
                    muiClass={muiStyle.radioText}
                    radioClasses={muiStyle.radioIcon}
                    title="Female"
                    value={E_GENDER_Type.FEMALE}
                  />
                </RadioGroup>
              </div>
              <Dropdown
                label={"Interested Groups"}
                options={categoryOptions}
                name={"favoriteGroups"}
                value={values.favoriteGroups}
                setFieldValue={setFieldValue}
              />
            </div>
            <ButtonComponent
              muiClass={muiStyle.createProfile}
              disabled={!(isValid && dirty) || isSubmitting}
              type={"submit"}
            >
              Create
            </ButtonComponent>
          </form>
        );
      }}
    </Formik>
  );
};

export default SignInForm;
