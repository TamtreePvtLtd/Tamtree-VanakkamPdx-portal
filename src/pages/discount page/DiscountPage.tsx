import React from "react";
import { IDiscountPage } from "../../interface/types";
import { useRef, useState } from "react";
import {  useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
  // FormControl,
  // FormHelperText,
  FormControlLabel,
  RadioGroup,
  FormLabel,
  Radio,
  InputAdornment,
} from "@mui/material";
import Box from "@mui/material/Box";
import { useMediaQuery } from "@mui/material";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import * as yup from "yup";
// import { ICateringEnquiry } from "../../interface/types";
// import { createCateringEnquiry } from "../../services/api";
// import { format } from "date-fns";
import { useStyles } from "../../styles/CateringFormStyle";
import Animate from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import emailjs from '@emailjs/browser';
import { useSnackBar } from "../../context/SnackBarContext";

const DiscountFormIniialValue: IDiscountPage = {
  firstName: "",
  lastName: "",
  email: "",
  mobileNumber: "",
  percentageValue: 0,
  rupeesValue: 0,
};
const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("Name is required")
    .max(30, "Maximum 30 characters allowed"),
  lastName: yup
    .string()
    .required("Name is required")
    .max(30, "Maximum 30 characters allowed"),

  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  mobileNumber: yup.string().required("Mobile number is required").max(10),
  percentageValue: yup.number().typeError("Value must be a number").min(0, "Value must be non-negative"),
  rupeesValue: yup.number().typeError("Value must be a number").min(0, "Value must be non-negative"),
});
const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
function DiscountPage() {
  const classes = useStyles();
  const { updateSnackBarState } = useSnackBar();
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState<IDiscountPage | null>(null);
  const [currency, setCurrency] = useState(""); 

  const formRef = useRef<HTMLFormElement>(null);
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm<IDiscountPage>({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues: DiscountFormIniialValue ,
  });

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = (data: boolean) => () => {
    setIsDialogOpen(false);
    if (data) {
      reset();
    }
  };

  const handleCurrencyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value); // Update selected currency state
  };

  const handleConfirmSubmit = async () => {
    try {
      if (formData) {
        let currencyValue: string | undefined;

        if (currency === "percentage") {
          currencyValue = formData.percentageValue !== undefined ? formData.percentageValue.toString() + "%" : undefined;
        } else if (currency === "rupees") {
          currencyValue = formData.rupeesValue !== undefined ? "Rs."+formData.rupeesValue.toString() : undefined;
        }
        const templateParams = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          mobileNumber: formData.mobileNumber,
          currency: currency === "percentage" ? "Discount in (%)" : "Discount in (Rs)",
          currencyValue: currencyValue !== undefined ? currencyValue : "",
        };


        await emailjs.send(
          'service_63ydi09',
          'template_kkftlss',
          templateParams,
          {
            publicKey: 'iXT3ojcSV-nuqolSJ',
          }
        );

        

        console.log(formData);
        updateSnackBarState(true, "Email sent Successfully", "success");


        
        reset();
        setFormData(null);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      updateSnackBarState(true, "Error in Sending Email", "error");
    } finally {
      handleCloseDialog(true)();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const newValue = value.replace(/\D/g, "");
    if (newValue.length <= 10) {
      e.target.value = newValue;
    }
  };

  const onSubmitDiscountForm = async (data: IDiscountPage) => {
    console.log("data", data);
    if (data) {
      setFormData(data);
      handleOpenDialog();
    }
  };

  return (
    <>
      <Box
        sx={{
          maxWidth: 600,
          margin: "auto",
          padding: isSmallScreen ? 3 : 0,
        }}
      >
        <Animate keyframes={slideInLeft} duration={600} delay={100} triggerOnce>
          <Typography
            variant="h5"
            fontWeight={600}
            sx={{
              textAlign: "center",
              fontFamily: " VanakkamPDX-Logo-Font",
              // marginTop: 4,
              padding: 3,
            }}
          >
            Discount Form
          </Typography>

          <form ref={formRef} onSubmit={handleSubmit(onSubmitDiscountForm)}>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={6}>
                <TextField
                  label="First Name *"
                  fullWidth
                  variant="outlined"
                  {...register("firstName")}
                  error={!!errors.firstName}
                  helperText={errors.firstName ? errors.firstName.message : ""}
                  className={classes.focused}
                  inputProps={{ maxLength: 31 }}
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  label="Last Name *"
                  fullWidth
                  variant="outlined"
                  {...register("lastName")}
                  error={!!errors.lastName}
                  helperText={errors.lastName ? errors.lastName.message : ""}
                  className={classes.focused}
                  inputProps={{ maxLength: 31 }}
                />
              </Grid>

              <Grid item lg={12} xs={12}>
                <TextField
                  label="Email *"
                  fullWidth
                  variant="outlined"
                  {...register("email")}
                  error={!!errors.email}
                  helperText={errors.email ? errors.email.message : ""}
                  className={classes.focused}
                />
              </Grid>
              <Grid item lg={12} xs={12}>
                <TextField
                  label="Mobile Number *"
                  fullWidth
                  variant="outlined"
                  {...register("mobileNumber")}
                  error={!!errors.mobileNumber}
                  helperText={
                    errors.mobileNumber ? errors.mobileNumber.message : ""
                  }
                  InputProps={{
                    startAdornment: (
                      <Typography variant="body1">+1&nbsp;</Typography>
                    ),
                  }}
                  inputProps={{
                    type: "tel",
                    maxLength: 10,
                    onChange: handleInputChange,
                  }}
                  className={classes.focused}
                />
              </Grid>
              <Grid item xs={12} lg={12}>
                <FormLabel>Select Units</FormLabel>
                <RadioGroup
                  aria-label="currency"
                  name="currency"
                  value={currency}
                  onChange={handleCurrencyChange}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <FormControlLabel
                      value="percentage"
                      control={<Radio />}
                      label="Percentage"
                    />
                    <FormControlLabel
                      value="rupees"
                      control={<Radio />}
                      label="Rupees"
                    />
                    {currency === "percentage" && (
                      <TextField
                        type="number"
                        inputProps={{ maxLength: 3 }}
                        label="Percentage"
                        {...register("percentageValue")}
                        onChange={handleInputChange}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">%</InputAdornment>
                          ),
                        }}
                        onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                          e.target.value = Math.max(0, parseInt(e.target.value))
                            .toString()
                            .slice(0, 3);
                        }}
                      />
                    )}

                    {currency === "rupees" && (
                      <TextField
                        type="number"
                        {...register("rupeesValue")}
                        onChange={handleInputChange}
                        inputProps={{ maxLength: 8 }}
                        label="Rupees"
                      />
                    )}
                  </Box>
                </RadioGroup>
              </Grid>

              <Grid
                item
                xs={12}
                gap={2}
                sx={{
                  marginBottom: isSmallScreen ? 0 : 2,
                  display: "flex",
                  justifyContent: "center",
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
                  onClick={() => {
                    reset(); // Reset the form
                    setCurrency(""); 
                  }}
                >
                  Clear
                </Button>
              </Grid>
            </Grid>
          </form>
        </Animate>
      </Box>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <DialogTitle>Confirm Submission</DialogTitle>
        </Box>
        <Divider />
        <DialogContent>Are you sure you want to submit the form?</DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseDialog(false)}
            variant="outlined"
            sx={{
              color: "green",
              borderColor: "green",
              "&:hover": {
                borderColor: "green",
              },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleConfirmSubmit}
            variant="contained"
            autoFocus
            sx={{
              color: "white",
              backgroundColor: "green",
              "&:hover": {
                backgroundColor: "green",
              },
            }}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DiscountPage;