import * as React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent, SelectProps } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import Checkbox from "@mui/material/Checkbox";
import { SxProps, Theme } from "@mui/material";

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 300,
    },
  },
};
interface IOptions {
  [key: string]: string;
}

export interface IDropdown extends SelectProps {
  label?: string;
  name: string;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
  muiClass?: SxProps<Theme>;
  options: IOptions[];
}
const Dropdown: React.FC<IDropdown> = ({
  label,
  name,
  muiClass,
  setFieldValue,
  options,
}) => {
  const [dropdown, setDropDown] = React.useState<string[]>([]);
  const handleChange = (event: SelectChangeEvent<typeof dropdown>) => {
    const {
      target: { value },
    } = event;

    setDropDown(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    setFieldValue(name, value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        multiple
        id={name}
        value={dropdown}
        onChange={handleChange}
        input={<OutlinedInput label={label} />}
        renderValue={(selected) => {
          return (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value, index) => {
                const currentValue = value;
                return <Chip key={index} label={currentValue} />;
              })}
            </Box>
          );
        }}
        MenuProps={MenuProps}
      >
        {options.map((name, index) => {
          // console.log(" name ",Object.values(name)[0]);

          return (
            <MenuItem key={index} value={Object.values(name)[0]}>
              <Checkbox checked={dropdown.includes(Object.values(name)[0])} />
              {Object.values(name)[0]}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
