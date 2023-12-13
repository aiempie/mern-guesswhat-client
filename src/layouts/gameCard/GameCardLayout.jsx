import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./GameCardLayout.scss";

function GameCardLayout({ gameInfo }) {
  const { name, section, image, isComming } = gameInfo;
  // router
  let navigate = useNavigate();

  const handClickCard = () => {
    navigate(`/${section}`);
  };
  return (
    <Card
      className="card-hover"
      key={name}
      sx={{
        backgroundColor: "#2d434f",
        margin: "10px",
        marginTop: "0",
        cursor: "pointer",
      }}
      onClick={isComming ? handClickCard : undefined}
    >
      <CardMedia
        className={isComming ? "" : "card_blur"}
        component="img"
        height="200"
        width="180"
        sx={{
          width: 200,
          height: 200,
          objectFit: "cover",
        }}
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography
          className="hover-red"
          gutterBottom
          variant="span"
          component="div"
          sx={{
            textAlign: "center",
            color: "white",
          }}
        >
          {isComming ? name : "Comming Soon"}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default GameCardLayout;
