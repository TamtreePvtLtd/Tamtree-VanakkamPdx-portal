import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  focused: {
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#6B0101",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#6B0101",
    },
  },
}));
