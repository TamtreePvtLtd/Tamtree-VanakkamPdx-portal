import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  focused: {
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#E4973C",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#E4973C",
    },
  },
}));