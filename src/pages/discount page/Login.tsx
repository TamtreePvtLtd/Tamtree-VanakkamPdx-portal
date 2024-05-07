import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ILoginFormInputs } from "../../interface/types";
import { useSnackBar } from "../../context/SnackBarContext";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import DiscountPage from "./DiscountPage";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

const CONSTANT_EMAIL = "vanakkampdx@gmail.com";
const CONSTANT_PASSWORD = "vanakkampdx";

function Login() {
  const { updateSnackBarState } = useSnackBar();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormInputs>({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const handleLogin = () => {
    if (CONSTANT_EMAIL === "vanakkampdx@gmail.com" && CONSTANT_PASSWORD === "vanakkampdx") {
      updateSnackBarState(true, "Login Successfully", "success")
      setIsLoggedIn(true)
    } else {
      updateSnackBarState(true, "Login failed", "error")
      setIsLoggedIn(false)
    }
    
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "70vh",
        }}
      >
        <Box>
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            sx={{ fontFamily: "alfa_slab_one", fontWeight: 700,color:"green" }}
          >
            Welcome to VANAKKAM PDX
          </Typography>
          <form onSubmit={handleSubmit(handleLogin)}>
            <Typography>
              Email<span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              type="email"
              defaultValue=""
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message?.toString()}
              FormHelperTextProps={{
                sx: { color: "red", marginLeft: "0px" },
              }}
              sx={{
                mt: 0,
                paddingBottom: "10px",
              }}
              required
            />
            <Typography>
              Password<span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              defaultValue=""
              type={showPassword ? "text" : "password"}
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message?.toString()}
              FormHelperTextProps={{
                sx: { color: "red", marginLeft: "0px" },
              }}
              required
              InputProps={{
                endAdornment: (
                  <IconButton
                    onClick={handleTogglePasswordVisibility}
                    edge="end"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                ),
              }}
            />
            <Button
              variant="contained"
              fullWidth
              sx={{ marginTop: 3,bgcolor:"green", "&:hover": {
                bgcolor: "green",
              }, }}
              type="submit"
            >
              Login
            </Button>
          </form>
        </Box>
      </Box>
      {isLoggedIn && <DiscountPage />}
    </>
  );
}

export default Login;
