import { Container, List, Typography } from "@mui/material";
import React from "react";
import "./GameAOV.scss";
import { useNavigate } from "react-router-dom";
import GuessRank from "~/components/guess-rank/GuessRank";

function GameAOV() {
  let navigate = useNavigate();

  const handClickCard = (e) => {
    navigate(`/aov/${e}`);
  };
  return (
    <Container className="flex justify-center item-center main_content">
      <Typography variant="h3" component="h3" className="title">
        Sẵn sàng thể hiện hiểu biết của bạn với <br />
        <span component="span">Liên Quân Mobile</span> chưa?
      </Typography>
      <Container className="aov_game">
        <List sx={{ width: "100%", maxWidth: 370 }}>
          <GuessRank handClick={handClickCard} />
        </List>
      </Container>
    </Container>
  );
}

export default GameAOV;
