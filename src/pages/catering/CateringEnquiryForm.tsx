import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useMediaQuery } from "@mui/material";
import * as yup from "yup";

interface FormValues {
  firstName: string;
  email: string;
  mobileNumber: string;
  eventType: string;
  eventDate: string;
  guestCount: number;
  message: string;
}

const initialFormValues: FormValues = {
  firstName: "",
  email: "",
  mobileNumber: "",
  eventType: "",
  eventDate: "",
  guestCount: 0,
  message: "",
};

const CateringEnquireForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [validationErrors, setValidationErrors] = useState<
    Record<string, string>
  >({});
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: name === "guestCount" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await schema.validate(formValues, { abortEarly: false });
      setIsDialogOpen(true);
      console.log("Form submitted successfully:", formValues);
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const errors: Record<string, string> = {};
        error.inner.forEach((err) => {
          if (err.path) {
            errors[err.path] = err.message;
          }
        });
        setValidationErrors(errors);
      }
    }
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleConfirmDialog = () => {
    setIsDialogOpen(false);
    setFormValues(initialFormValues);
  };

  const schema = yup.object().shape({
    firstName: yup.string().required("Your name is required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    mobileNumber: yup
      .string()
      .required("Mobile number is required")
      .matches(/^[0-9]{10}$/, "Please enter a valid mobile number"),
    eventType: yup.string(),
    eventDate: yup.string().required("Event date is required"),
    guestCount: yup
      .number()
      .integer("Guest count must be an integer")
      .min(0, "Guest count must be greater than or equal to 0"),
    message: yup.string(),
  });

  return (
    <Box sx={{
      maxWidth: 600, margin: "auto",
    padding:isSmallScreen?3:"unset"}}>
      <Typography
        sx={{
          textAlign: "center",
          marginBottom: isSmallScreen ? 2 :"unset",
        }}
      >
        <h2>Catering Enquiry Form </h2>
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} >
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Full Name*"
              name="firstName"
              value={formValues.firstName}
              onChange={handleChange}
              error={Boolean(validationErrors.firstName)}
              helperText={validationErrors.firstName || ""}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email*"
              name="email"
              type="email"
              value={formValues.email}
              onChange={handleChange}
              error={Boolean(validationErrors.email)}
              helperText={validationErrors.email || ""}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Mobile Number*"
              name="mobileNumber"
              value={formValues.mobileNumber}
              onChange={handleChange}
              error={Boolean(validationErrors.mobileNumber)}
              helperText={validationErrors.mobileNumber || ""}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Type of Event"
              name="eventType"
              value={formValues.eventType}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Event Date*"
              name="eventDate"
              type="date"
              placeholder="DD-MM-YYYY"
              InputLabelProps={{ shrink: true }}
              value={formValues.eventDate}
              onChange={handleChange}
              error={Boolean(validationErrors.eventDate)}
              helperText={validationErrors.eventDate || ""}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Guest Count"
              name="guestCount"
              type="number"
              value={formValues.guestCount}
              onChange={handleChange}
              error={Boolean(validationErrors.guestCount)}
              helperText={validationErrors.guestCount || ""}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={4}
              value={formValues.message}
              onChange={handleChange}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              marginBottom: 2,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              type="submit"
              variant="contained"
              sx={{
                marginBottom: "10px",
                backgroundColor: "#6B0101",
                "&:hover": {
                  backgroundColor: "#6B0101",
                },
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Confirm Submission</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Are you sure you want to submit the form?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} variant="contained">
            Cancel
          </Button>
          <Button onClick={handleConfirmDialog} variant="contained" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CateringEnquireForm;