import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import React from "react";
import "./GuessRank.scss";
import linkTo from "~/config/linkTo";

function GuessRank({ handClick }) {
  const handClickCard = () => {
    handClick(linkTo.guessRank);
  };
  return (
    <ListItem className="list_game_item" onClick={() => handClickCard()}>
      <ListItemAvatar>
        <Avatar
          sx={{
            bgcolor: "#2d2d2d75",
            border: "3px solid #c1bd0c",
            borderRadius: "50%",
          }}
        >
          <PlayCircleIcon sx={{ color: "#ff0" }} />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary="Xem clip"
        secondary="Đoán mức rank của người chơi trong clip"
        sx={{
          "color": "#fff",
          "& .MuiListItemText-secondary": {
            color: "#fff",
            fontSize: "13px",
          },
        }}
      />
    </ListItem>
  );
}

export default GuessRank;
