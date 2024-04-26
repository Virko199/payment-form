import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { payerAccounts } from "../mockData";
import { Option } from "./types";
import { StyledWrap } from "./styles";
import Box from "@mui/material/Box";

export const SelectPayer = ({
  option,
  handleChange,
}: {
  option: Option;
  handleChange: (value: string) => void;
}) => (
  <StyledWrap>
    <Box component="span">Select account</Box>
    <Select
      value={option.value}
      label={option.label}
      onChange={({ target: { value } }) => handleChange(value)}
    >
      {payerAccounts.map((account) => (
        <MenuItem key={account.id} value={account.id}>
          {account.iban}
        </MenuItem>
      ))}
    </Select>
  </StyledWrap>
);
