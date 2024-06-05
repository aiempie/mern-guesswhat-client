import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, CardMedia, Rating, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import loadLevel from "~/config/capTuTien";
import linkTo from "~/config/linkTo";

function GameInfo({ game, score, textColor }) {
  const [level, setLevel] = useState();

  useEffect(() => {
    setLevel(loadLevel(score));
  }, [score]);

  return (
    <Card className="flex items-center justify-start flex-wrap mb-4">
      <Link to={`/${game.section}/${linkTo.chart}`}>
        <CardMedia
          component="img"
          sx={{ width: 150 }}
          image={level?.image}
          alt={level?.name}
          title={`Đi tới BXH ${game.name}`}
        />
      </Link>
      <Box className="flex flex-col">
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5" color={textColor || "secondary"}>
            {game.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {level?.name}
          </Typography>
          <Rating
            value={parseInt(score?.toString().charAt(0), 10)}
            disabled
            max={9}
            size="small"
            sx={{ color: level?.color }}
          />
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {`ĐKN: ${score || 0}`}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}

export default GameInfo;
