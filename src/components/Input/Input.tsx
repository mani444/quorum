import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { InputProps, SxProps, Theme } from "@mui/material";

import classes from "./Input.module.scss";

export interface IInput extends InputProps {
  leftIcon?: string;
  rightIcon?: string;
  label?: string;
  muiClass?: SxProps<Theme>;
}
const Input: React.FC<IInput> = ({
  leftIcon,
  rightIcon,
  label,
  name,
  muiClass,
  ...rest
}) => {
  return (
    <FormControl fullWidth variant="outlined">
      {label && <InputLabel htmlFor={name}>{label}</InputLabel>}

      <OutlinedInput
        label={label}
        id={name}
        sx={{ ...muiClass }}
        endAdornment={
          rightIcon && (
            <img
              src={rightIcon}
              alt="rightIcon"
              className={classes["rightIcon"]}
            />
          )
        }
        startAdornment={
          leftIcon && (
            <img
              src={leftIcon}
              alt="leftIcon"
              className={classes["leftIcon"]}
            />
          )
        }
        {...rest}
      />
    </FormControl>
  );
};

export default Input;
