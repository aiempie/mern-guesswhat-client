import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import React from "react";
import "./GuessRank.scss";

function GameItem({ handClick, headText, contentText, linkTo, icon }) {
  const handClickCard = () => {
    handClick(linkTo);
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
          {icon}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={headText}
        secondary={contentText}
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

export default GameItem;
