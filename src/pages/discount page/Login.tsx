import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ILoginFormInputs } from "../../interface/types";
import { useSnackBar } from "../../context/SnackBarContext";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import DiscountPage from "./DiscountPage";
import bcrypt from 'bcryptjs';


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email address")
    .matches(emailRegex, 'Invalid email format'),
    
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
    reset,
    formState: { errors },
  } = useForm<ILoginFormInputs>({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const handleLogin = (data: ILoginFormInputs) => {
    const hashedPassword = bcrypt.hashSync(data.password, 10);

    if (data.email === CONSTANT_EMAIL && bcrypt.compareSync(CONSTANT_PASSWORD, hashedPassword)) {
      updateSnackBarState(true, "Login Successfully", "success");
      setIsLoggedIn(true);
    } else {
      updateSnackBarState(true, "Incorrect email or password", "error");
    }
};
const handleClearForm = () => {
  reset(); // Reset form fields to default values
};

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "65vh",
          margin: "auto",
        }}
      >
        <Box>
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            sx={{
              fontFamily: "alfa_slab_one",
              fontWeight: 700,
              color: "green",
            }}
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
              <Grid
                item
                xs={12}
                gap={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop:3
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    boxShadow: "none",
                    backgroundColor: "green",
                    borderRadius: "20px",
                    "&:hover": {
                      backgroundColor: "green",
                      boxShadow: "none",
                      borderRadius: "20px",
                    },
                  }}
                >
                  Submit
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    color: "green",
                    borderColor: "green",
                    "&:hover": {
                      borderColor: "green",
                    },
                  }}                  
                  onClick={handleClearForm}
                >
                  Clear
                </Button>
              </Grid>
          </form>
        </Box>
      </Box>
      {isLoggedIn && <DiscountPage />}
    </>
  );
}

export default Login;
