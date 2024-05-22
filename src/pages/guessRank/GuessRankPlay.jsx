import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoDisturbOffIcon from "@mui/icons-material/DoDisturbOff";

function GuessRankPlay({ game, open, onClose, ranks }) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>How to Play?</DialogTitle>
      <DialogContent>
        <p>
          Xem 1 clip về <strong>{game}</strong> và đoán bậc xếp hạng của người chơi trong clip
        </p>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Thu thập điểm số dựa trên lựa chọn của bạn." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Đoán chính xác rank được cộng 5 điểm." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Đoán đúng trong khoảng 1 rank chênh lệch được cộng 2 điểm." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <DoDisturbOffIcon />
            </ListItemIcon>
            <ListItemText primary="Đoán sai sẽ bị trừ 3 điểm." />
          </ListItem>
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained" color="success">
          Đã hiểu
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default GuessRankPlay;
