import React from "react";
import Button from "@mui/material/Button";
import { ButtonProps, SxProps, Theme } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import classes from "./Button.module.scss";

interface IButton extends ButtonProps {
  leftIcon?: string;
  rightIcon?: string;
  muiClass?: SxProps<Theme>;
}

const ButtonComponent: React.FC<IButton> = ({
  leftIcon,
  rightIcon,
  muiClass,
  children,
  ...rest
}) => {
  return (
    <Button
      variant="contained"
      startIcon={
        leftIcon && (
          <img src={leftIcon} alt="Icon" className={classes["icon"]} />
        )
      }
      endIcon={
        rightIcon && (
          <img src={rightIcon} alt="Icon" className={classes["icon"]} />
        )
      }
      sx={{ ...muiClass }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;

interface IButtonIcon extends ButtonProps {
  icon?: string;
  label?: string;
  muiClass?: SxProps<Theme>;
}

export const ButtonIcon: React.FC<IButtonIcon> = ({
  label,
  icon,
  muiClass,
  ...rest
}) => {
  return (
    <IconButton aria-label={label} sx={{ ...muiClass }} {...rest}>
      <img src={icon} alt="Icon" className={classes["icon"]} />
    </IconButton>
  );
};
