import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function ResultDialog({ isOpen, handleRefresh, result, onClose }) {
  const navigate = useNavigate();

  const handleClose = () => {
    onClose();
    navigate("/");
  };
  return (
    <Dialog open={isOpen} onClose={handleRefresh} fullWidth>
      <DialogTitle sx={{ color: result?.plusScore <= 0 ? "red" : "green" }}>
        {result?.plusScore <= 0 ? "Chia buồn!" : "Chúc mừng!"}
      </DialogTitle>
      <DialogContent>
        <p>{result?.message}</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Thoát</Button>
        {result?.isNoCount ? (
          ""
        ) : (
          <Button onClick={handleRefresh} variant="contained" color="primary">
            Tiếp theo
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}

export default ResultDialog;
