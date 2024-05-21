import { Container, List, Typography } from "@mui/material";
import React from "react";
import "./GameAOV.scss";
import { useNavigate } from "react-router-dom";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import GameItem from "~/components/game-item/GameItem";
import linkTo from "~/config/linkTo";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import QuizIcon from "@mui/icons-material/Quiz";

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
          <GameItem
            handClick={handClickCard}
            headText="Xem clip"
            contentText="Đoán mức rank của người chơi trong clip"
            icon={<PlayCircleIcon sx={{ color: "#ff0" }} />}
            linkTo={linkTo.guessRank}
          />
          <GameItem
            handClick={handClickCard}
            headText="Quiz"
            contentText="Trả lời đúng câu hỏi và nhận phần thưởng"
            icon={<QuizIcon sx={{ color: "#ff0" }} />}
            linkTo={linkTo.quiz}
          />
          <GameItem
            handClick={handClickCard}
            headText="Bảng xếp hạng"
            contentText="Xem bảng xếp hạng người chơi LOL"
            icon={<LeaderboardIcon sx={{ color: "#ff0" }} />}
            linkTo={linkTo.chart}
          />
        </List>
      </Container>
    </Container>
  );
}

export default GameAOV;
