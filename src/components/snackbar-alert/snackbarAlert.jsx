import { Alert, Slide, Snackbar } from "@mui/material";
import React from "react";

function SlideTransition(props) {
  return <Slide {...props} direction="left" />;
}

function SnackbarAlert({ open, setOpen, severity, text }) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      TransitionComponent={SlideTransition}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }} variant="filled">
        {text}
      </Alert>
    </Snackbar>
  );
}

export default SnackbarAlert;
