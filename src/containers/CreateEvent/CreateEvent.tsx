import React from "react";

import classes from "./CreateEvent.module.scss";
import CreateEventHeader from "./CreateEventComponents/CreateEventHeader/CreateEventHeader";
import CreateEventForm from "./CreateEventComponents/CreateEventForm/CreateEventForm";
import { useHistory } from "react-router-dom";
import { IEvent } from "../../interfaces/interfaces";
import { HOME_ROUTE } from "../../routes/RoutesConstants";
import { Formik } from "formik";
import { createEventInitialValues } from "../../initialValues/CreateEventInitialValues";
import CreateEventValidation from "../../validations/CreateEventValidations";

const CreateEvent = () => {
  const history = useHistory();
  const handleClick = (values: IEvent) => {
    try {
      console.log("values", values);
      history.push(HOME_ROUTE);
    } catch (err) {
      console.log("error while creating event", err);
    }
  };
  return (
    <div className={classes["container"]}>
      <Formik
        initialValues={{ ...createEventInitialValues() }}
        validationSchema={CreateEventValidation}
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
              style={{ width: "100%" }}
            >
              <CreateEventHeader actions={{ isSubmitting, isValid, dirty }} />
              <CreateEventForm
                actions={{ values, handleBlur, handleChange, setFieldValue }}
              />
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CreateEvent;
