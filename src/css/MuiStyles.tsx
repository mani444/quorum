import { DODGER_BLUE, JUMBO, WHITE } from "../colors";

export const muiStyles = () => {
  return {
    searchInput: {
      fontSize: "20px",
      fontWeight: 600,
      color: JUMBO,
      padding: "8px",
      borderRadius: "20px",
      backgroundColor: WHITE,
      "& ::placeholder": {
        color: JUMBO,
      },
    },
    creatEventInput: {
      fontWeight: 500,
      color: JUMBO,
      padding: "10px 0",
      backgroundColor: WHITE,
      border: "0px",
    },
    profileInput: {
      fontWeight: 500,
      color: JUMBO,
      padding: "10px 0",
      backgroundColor: WHITE,
      border: "0px",
    },
    chatInput: {
      fontSize: "16px",
      fontWeight: 500,
      color: JUMBO,
      borderRadius: "20px",
      backgroundColor: WHITE,
    },
    saveEventBtn: {
      height: "40px",
      width: "40px",
      marginRight: "10px",
      "& img": {
        height: "30px",
        width: "30px",
        objectFit: "contain",
      },
    },

    radioText: {
      color: JUMBO,
    },
    radioIcon: {
      color: JUMBO,
      "&.Mui-checked": {
        color: DODGER_BLUE,
      },
    },
    createProfile: {
      width: "100%",
      padding: "10px 0px",
      marginTop: "10px",
    },
  };
};
