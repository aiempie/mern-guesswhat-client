import React from "react";
import {
  Box,
  Button,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoDisturbOffIcon from "@mui/icons-material/DoDisturbOff";
import { Link } from "react-router-dom";
import linkTo from "~/config/linkTo";

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
              <CheckCircleIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Thu thập điểm số dựa trên lựa chọn của bạn." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Đoán chính xác rank được cộng 5 điểm." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Đoán đúng trong khoảng 1 rank chênh lệch được cộng 2 điểm." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <DoDisturbOffIcon color="error" />
            </ListItemIcon>
            <ListItemText primary="Đoán sai sẽ bị trừ 3 điểm." />
          </ListItem>
        </List>
        <Typography variant="h6">Ví dụ:</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Rank chính xác</TableCell>
              <TableCell align="center">Rank bạn chọn</TableCell>
              <TableCell align="center">Điểm nhận được</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">
                <Box className="flex justify-center flex-col items-center">
                  <CardMedia
                    component="img"
                    sx={{ width: "30px" }}
                    image={ranks[4]?.image}
                    alt={ranks[4]?.rankName}
                  />
                  <Typography variant="body2">{ranks[4]?.rankName}</Typography>
                </Box>
              </TableCell>
              <TableCell align="center">
                <Box className="flex justify-center flex-col items-center">
                  <CardMedia
                    component="img"
                    sx={{ width: "30px" }}
                    image={ranks[5]?.image}
                    alt={ranks[5]?.rankName}
                  />
                  <Typography variant="body2">{ranks[5]?.rankName}</Typography>
                </Box>
              </TableCell>
              <TableCell align="center">
                <Typography variant="body1" sx={{ color: "green" }}>
                  + 2
                </Typography>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="center">
                <Box className="flex justify-center flex-col items-center">
                  <CardMedia
                    component="img"
                    sx={{ width: "30px" }}
                    image={ranks[4]?.image}
                    alt={ranks[4]?.rankName}
                  />
                  <Typography variant="body2">{ranks[4]?.rankName}</Typography>
                </Box>
              </TableCell>
              <TableCell align="center">
                <Box className="flex justify-center flex-col items-center">
                  <CardMedia
                    component="img"
                    sx={{ width: "30px" }}
                    image={ranks[4]?.image}
                    alt={ranks[4]?.rankName}
                  />
                  <Typography variant="body2">{ranks[4]?.rankName}</Typography>
                </Box>
              </TableCell>
              <TableCell align="center">
                <Typography variant="body1" sx={{ color: "green" }}>
                  + 5
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">
                <Box className="flex justify-center flex-col items-center">
                  <CardMedia
                    component="img"
                    sx={{ width: "30px" }}
                    image={ranks[4]?.image}
                    alt={ranks[4]?.rankName}
                  />
                  <Typography variant="body">{ranks[4]?.rankName}</Typography>
                </Box>
              </TableCell>
              <TableCell align="center">
                <Box className="flex justify-center flex-col items-center">
                  <CardMedia
                    component="img"
                    sx={{ width: "30px" }}
                    image={ranks[2]?.image}
                    alt={ranks[2]?.rankName}
                  />
                  <Typography variant="body2">{ranks[2]?.rankName}</Typography>
                </Box>
              </TableCell>
              <TableCell align="center">
                <Typography variant="body1" sx={{ color: "red" }}>
                  - 3
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Typography variant="body1" sx={{ marginTop: "1rem" }} align="center">
          Gửi hightlight của bạn cho chúng tôi và nhận về 30 lượt chơi mới tại{" "}
          <Link className="font-bold text-blue-500" target="_blank" to={linkTo.submitClip}>
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

export default GuessRankPlay;
