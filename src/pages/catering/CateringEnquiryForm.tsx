import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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
import { ICateringEnquiry } from "../../interface/types";
import { createCateringEnquiry } from "../../services/api";

const initialFormValues: ICateringEnquiry = {
  fullName: "",
  email: "",
  mobileNumber: "",
  typeOfEvent: "",
  eventDate: "",
  guestCount: 0,
  message: "",
};

const schema = yup.object().shape({
  fullName: yup.string().required("Your name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  mobileNumber: yup
    .string()
    .required("Mobile number is required")
    .matches(/^[0-9]{10}$/, "Please enter a valid mobile number"),
  typeOfEvent: yup.string(),
  eventDate: yup.string().required("Event date is required"),
  guestCount: yup.number(),
  message: yup.string(),
});

const CateringEnquireForm: React.FC = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm<ICateringEnquiry>({
    defaultValues: initialFormValues,
    resolver: yupResolver(schema),
  });

  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const [formData, setFormData] = useState<ICateringEnquiry>(initialFormValues);

  const onSubmit = (data: ICateringEnquiry) => {
    setIsDialogOpen(true);
    setFormData(data);
  };

  const handleCloseDialog = (resetForm: boolean) => {
    setIsDialogOpen(false);
    if (resetForm) {
      reset();
    }
  };

  const handleConfirmDialog = async () => {
    try {
      const response = await createCateringEnquiry(formData);
      console.log("Enquiry submitted successfully!", response);
      setIsDialogOpen(false);
      reset();
    } catch (error) {
      console.error("Error submitting enquiry:", error);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: "auto",
        padding: isSmallScreen ? 3 : "unset",
      }}
    >
      <Typography
        sx={{ textAlign: "center", marginBottom: isSmallScreen ? 2 : "unset" }}
      >
        <h2>Catering Enquiry Form </h2>
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Full Name*"
              {...register("fullName")}
              error={Boolean(errors.fullName)}
              helperText={errors.fullName ? errors.fullName.message : ""}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email*"
              {...register("email")}
              error={Boolean(errors.email)}
              helperText={errors.email ? errors.email.message : ""}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Mobile Number*"
              {...register("mobileNumber")}
              error={Boolean(errors.mobileNumber)}
              helperText={
                errors.mobileNumber ? errors.mobileNumber.message : ""
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Type of Event"
              {...register("typeOfEvent")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Event Date*"
              type="date"
              InputLabelProps={{ shrink: true }}
              {...register("eventDate")}
              error={Boolean(errors.eventDate)}
              helperText={errors.eventDate ? errors.eventDate.message : ""}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Guest Count"
              type="number"
              inputProps={{ min: "0" }}
              {...register("guestCount")}
              error={Boolean(errors.guestCount)}
              helperText={errors.guestCount ? errors.guestCount.message : ""}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              multiline
              rows={4}
              {...register("message")}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ marginBottom: 2, display: "flex", justifyContent: "center" }}
          >
            <Button
              type="submit"
              variant="contained"
              sx={{
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
      <Dialog open={isDialogOpen} onClose={() => handleCloseDialog(false)}>
        <DialogTitle>Confirm Submission</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Are you sure you want to submit the form?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => handleCloseDialog(false)}
            variant="outlined"
            sx={{
              color: "#6B0101",
              borderColor: "#6B0101",
              "&:hover": {
                borderColor: "#6B0101",
              },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => handleConfirmDialog()}
            variant="contained"
            autoFocus
            sx={{
              backgroundColor: "#6B0101",
              "&:hover": {
                backgroundColor: "#6B0101",
              },
            }}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CateringEnquireForm;
