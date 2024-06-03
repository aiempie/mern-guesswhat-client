import {
  Avatar,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import listGame from "~/config/ListGame";
import "./GetPoint.scss";
import { useNavigate } from "react-router-dom";
import linkTo from "~/config/linkTo";

function GetPoint() {
  const navigate = useNavigate();
  const handleClickSubmitQuiz = (game) => {
    navigate(`/${game}/${linkTo.submitQuiz}`);
  };

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Paper elevation={24} className="get_point">
        <Typography variant="h5" component="h5">
          Quiz - Gửi câu hỏi và nhận về <strong>5 lượt chơi</strong> nhé
        </Typography>
        <List component="nav" sx={{ width: "100%" }}>
          {listGame
            .filter((game) => game.isComming)
            .map((game) => (
              <ListItemButton
                component="a"
                key={game.section}
                onClick={() => handleClickSubmitQuiz(game.section)}
              >
                <ListItemIcon className="mr-4">
                  <Avatar sx={{ width: 56, height: 56 }} src={game.icon} alt={game.name} />
                </ListItemIcon>
                <ListItemText primary={game.name} />
              </ListItemButton>
            ))}
        </List>
      </Paper>
    </Box>
  );
}

export default GetPoint;
