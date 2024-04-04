// import React, { useState } from "react";
// import {
//   TextField,
//   Button,
//   Grid,
//   Box,
//   Typography,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from "@mui/material";
// import { useMediaQuery } from "@mui/material";
// import * as yup from "yup";
// import { createCateringEnquiry } from "../../services/api";
// import { ICateringEnquiry } from "../../interface/types";

// const initialFormValues: ICateringEnquiry = {
//   fullName: "",
//   email: "",
//   mobileNumber: "",
//   typeOfEvent: "",
//   eventDate: "",
//   guestCount: 0,
//   message: "",
// };

// const CateringEnquireForm = () => {
//   const [formValues, setFormValues] =
//     useState<ICateringEnquiry>(initialFormValues);
//   const [validationErrors, setValidationErrors] = useState<
//     Record<string, string>
//   >({});
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const isSmallScreen = useMediaQuery("(max-width: 600px)");

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormValues((prevState) => ({
//       ...prevState,
//       [name]: name === "guestCount" ? parseInt(value) : value,
//     }));
//   };

//  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//    e.preventDefault();

//    try {
//      const response = await createCateringEnquiry(formValues);
//      console.log("Enquiry submitted successfully!", response);
//      setFormValues(initialFormValues);
//      setIsDialogOpen(true);
//    } catch (error) {
//      console.error("Error submitting enquiry:", error);
//      // Handle error states here, if necessary
//    }
//  };

//   const handleCloseDialog = () => {
//     setIsDialogOpen(false);
//   };

//  const handleConfirmDialog = () => {
//    setIsDialogOpen(false);
//    // Reset form only when confirm button is clicked
//    if (isDialogOpen) {
//      setFormValues(initialFormValues);
//    }
//  };

//   const schema = yup.object().shape({
//     fullName: yup.string().required("Your name is required"),
//     email: yup
//       .string()
//       .email("Invalid email address")
//       .required("Email is required"),
//     mobileNumber: yup
//       .string()
//       .required("Mobile number is required")
//       .matches(/^[0-9]{10}$/, "Please enter a valid mobile number"),
//     typeOfEvent: yup.string(),
//     eventDate: yup.string().required("Event date is required"),
//     guestCount: yup
//       .number()
//       .integer("Guest count must be an integer")
//       .min(0, "Guest count must be greater than or equal to 0"),
//     message: yup.string(),
//   });

//   return (
//     <Box
//       sx={{
//         maxWidth: 600,
//         margin: "auto",
//         padding: isSmallScreen ? 3 : "unset",
//       }}
//     >
//       <Typography
//         sx={{ textAlign: "center", marginBottom: isSmallScreen ? 2 : "unset" }}
//       >
//         <h2>Catering Enquiry Form </h2>
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Full Name*"
//               name="fullName"
//               value={formValues.fullName}
//               onChange={handleChange}
//               error={Boolean(validationErrors.fullName)}
//               helperText={validationErrors.fullName || ""}
//             />
//           </Grid>

//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Email*"
//               name="email"
//               type="email"
//               value={formValues.email}
//               onChange={handleChange}
//               error={Boolean(validationErrors.email)}
//               helperText={validationErrors.email || ""}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Mobile Number*"
//               name="mobileNumber"
//               value={formValues.mobileNumber}
//               onChange={handleChange}
//               error={Boolean(validationErrors.mobileNumber)}
//               helperText={validationErrors.mobileNumber || ""}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Type of Event"
//               name="typeOfEvent"
//               value={formValues.typeOfEvent}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Event Date*"
//               name="eventDate"
//               type="date"
//               placeholder="DD-MM-YYYY"
//               InputLabelProps={{ shrink: true }}
//               value={formValues.eventDate}
//               onChange={handleChange}
//               error={Boolean(validationErrors.eventDate)}
//               helperText={validationErrors.eventDate || ""}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Guest Count"
//               name="guestCount"
//               type="number"
//               value={formValues.guestCount}
//               onChange={handleChange}
//               error={Boolean(validationErrors.guestCount)}
//               helperText={validationErrors.guestCount || ""}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Message"
//               name="message"
//               multiline
//               rows={4}
//               value={formValues.message}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid
//             item
//             xs={12}
//             sx={{
//               marginBottom: 2,
//               display: "flex",
//               justifyContent: "center",
//             }}
//           >
//             <Button
//               type="submit"
//               variant="contained"
//               sx={{
//                 marginBottom: "10px",
//                 backgroundColor: "#6B0101",
//                 "&:hover": {
//                   backgroundColor: "#6B0101",
//                 },
//               }}
//             >
//               Submit
//             </Button>
//           </Grid>
//         </Grid>
//         <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
//           <DialogTitle>Confirm Submission</DialogTitle>
//           <DialogContent>
//             <Typography variant="body1">
//               Are you sure you want to submit the form?
//             </Typography>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleCloseDialog} variant="contained">
//               Cancel
//             </Button>
//             <Button onClick={handleConfirmDialog} variant="contained" autoFocus>
//               Confirm
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </form>
//     </Box>
//   );
// };

// export default CateringEnquireForm;

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
