import React from "react";
import { FormControlLabel, Radio, RadioProps } from "@mui/material";
import { SxProps, Theme } from "@mui/material";

interface IRadioButton extends RadioProps {
  labelPlacement?: "bottom" | "top" | "end" | "start" | undefined;
  radioClasses?: SxProps<Theme>;
  muiClass?: SxProps<Theme>;
}

const RadioWithText: React.FC<IRadioButton> = ({
  title,
  value,
  labelPlacement,
  radioClasses,
  muiClass,
  ...rest
}) => {
  return (
    <FormControlLabel
      sx={{ ...muiClass }}
      value={value}
      control={<RadioButton radioClasses={radioClasses} {...rest} />}
      label={title}
      labelPlacement={labelPlacement || "end"}
    />
  );
};

export default RadioWithText;

export const RadioButton: React.FC<IRadioButton> = ({ radioClasses, ...rest }) => {
  return <Radio {...rest} sx={{ ...radioClasses }} />;
};

//////access method

// const Home = () => {
//     const [radio, setRadio] = useState("female");
//     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//       setRadio(event.target.value);
//     };
//     return (
//       <div>
//         <div style={{ padding: "600px" }}>
//           <RadioGroup
//             aria-label="gender"
//             name="gender1"
//             value={radio}
//             onChange={handleChange}
//           >
//             <RadioWithText title="Cash" value={"cash"} />
//             <RadioWithText title="Male" value={"male"} />
//             <RadioWithText title="Female" value={"female"} />
//           </RadioGroup>
//         </div>
//       </div>
//     );
//   };
