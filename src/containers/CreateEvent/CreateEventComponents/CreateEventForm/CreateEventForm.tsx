import React from "react";
import { ErrorMessage } from "formik";
import Input, { IInput } from "../../../../components/Input/Input";
import { muiStyles } from "../../../../css/MuiStyles";
import classes from "./CreateEventForm.module.scss";
import { InputProps, RadioGroup } from "@mui/material";
import RadioWithText from "../../../../components/RadioButton/RadioButton";
import { E_GROUP_Type } from "../../../../enums/Enums";
import { IEvent } from "../../../../interfaces/interfaces";
import ImagePicker from "../../../../components/ImagePicker/ImagePicker";
import { EVENT_INPUT_DATA, EVENT_SOCIAL_DATA } from "../../../../constants";

type typeHandleBlur = {
  (e: React.FocusEvent<any, Element>): void;
  <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
};

interface ICreateEventForm {
  actions: {
    values: IEvent;
    handleChange: any;
    handleBlur: typeHandleBlur;
    setFieldValue: (
      field: string,
      value: any,
      shouldValidate?: boolean | undefined
    ) => void;
  };
}
const CreateEventForm: React.FC<ICreateEventForm> = ({ actions }) => {
  const muiStyle = muiStyles();
  const { values, handleBlur, handleChange, setFieldValue } = actions;

  return (
    <div className={classes["createEventContainer"]}>
      <div className={classes["profileSection"]}>
        <div className={classes["addIcon"]}>
          <ImagePicker
            value={values.image}
            setFieldValue={setFieldValue}
            name={"image"}
          />
        </div>
        <div className={classes["inputSection"]}>
          {EVENT_INPUT_DATA.map((input, index) => {
            const value = values[input.name as keyof IEvent];
            return (
              <InputWithError
                key={index}
                label={input.label}
                name={input.name}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                multiline={input.multiline}
                rows={input.rows}
                style={input.style}
              />
            );
          })}
        </div>
      </div>
      <div className={classes["socialSection"]}>
        {EVENT_SOCIAL_DATA.map((socialData, index) => {
          const value = values[socialData.name as keyof IEvent];
          return (
            <InputWithLabel
              key={index}
              icon={socialData.icon}
              label={socialData.label}
              placeholder={socialData.placeholder}
              name={socialData.name}
              value={value}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          );
        })}
      </div>
      <div className={classes["divider"]} />
      <div className={classes["eventContainer"]}>
        <div className={classes["eventTitle"]}>Event Type</div>
        <div className={classes["radioSection"]}>
          <RadioGroup
            aria-label="eventType"
            row
            name="eventType"
            value={values.eventType}
            onChange={handleChange}
          >
            <RadioWithText
              muiClass={muiStyle.radioText}
              radioClasses={muiStyle.radioIcon}
              title="Public"
              value={E_GROUP_Type.PUBLIC}
            />
            <RadioWithText
              muiClass={muiStyle.radioText}
              radioClasses={muiStyle.radioIcon}
              title="Private"
              value={E_GROUP_Type.PRIVATE}
            />
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};

export default CreateEventForm;

export const InputWithError: React.FC<IInput> = ({
  label,
  name = "",
  value,
  onChange,
  ...rest
}) => {
  const muiStyle = muiStyles();
  return (
    <div className={classes["errorInput"]}>
      <Input
        label={label}
        muiClass={muiStyle.creatEventInput}
        id={name}
        onChange={onChange}
        {...rest}
      />
      <ErrorSlot name={name} />
    </div>
  );
};

interface IInputWithLabel extends InputProps {
  icon: string;
  label: string;
}

const InputWithLabel: React.FC<IInputWithLabel> = ({
  icon,
  label,
  name = "",
  ...rest
}) => {
  const muiStyle = muiStyles();
  return (
    <div className={classes["labelInputContainer"]}>
      <div className={classes["labelSection"]}>
        <img alt={"icon"} src={icon} className={classes["labelIcon"]} />
        <div className={classes["inputLabel"]}>{label}</div>
      </div>
      <div className={classes["inputWrapper"]}>
        <Input muiClass={muiStyle.creatEventInput} id={name} {...rest} />
        <ErrorSlot name={name} />
      </div>
    </div>
  );
};
interface IErrorSlot {
  name: string;
}
export const ErrorSlot: React.FC<IErrorSlot> = ({ name }) => {
  return (
    <ErrorMessage name={name} component="div" className={classes["error"]} />
  );
};
