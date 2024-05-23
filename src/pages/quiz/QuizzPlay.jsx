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
  Typography,
} from "@mui/material";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoDisturbOffIcon from "@mui/icons-material/DoDisturbOff";
import { Link } from "react-router-dom";
import linkTo from "~/config/linkTo";

function QuizzPlay({ game, open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>How to Play?</DialogTitle>
      <DialogContent>
        <p>
          Đọc câu hỏi về <strong>{game.name}</strong> và lựa chọn 1 đáp án mà bạn cho là đúng nhất
        </p>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Thu thập điểm số dựa trên lựa chọn của bạn." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Trả lời chính xác câu hỏi được cộng 1 điểm." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <DoDisturbOffIcon color="error" />
            </ListItemIcon>
            <ListItemText primary="Trả lời sai sẽ bị trừ 1 điểm." />
          </ListItem>
        </List>
        <Typography variant="body1" sx={{ marginTop: "1rem" }} align="center">
          Gửi câu đố của bạn cho chúng tôi và nhận về <strong>5</strong> lượt chơi mới tại{" "}
          <Link className="font-bold text-blue-500" to={`/${game.section}/${linkTo.submitQuiz}`}>
            đây!
          </Link>
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained" color="success">
          Đã hiểu
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default QuizzPlay;
