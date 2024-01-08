import { Box, Card, CardContent, CardMedia, Rating, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import loadLevel from "~/config/capTuTien";

function GameInfo({ gameName, score }) {
  const [level, setLevel] = useState();

  useEffect(() => {
    setLevel(loadLevel(score));
  }, [score]);

  return (
    <Card className="flex items-center justify-around flex-wrap mb-4">
      <Box className="flex flex-col">
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5" color="secondary">
            {gameName}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {`${level?.name}`}
          </Typography>
          <Rating
            value={parseInt(score?.toString().charAt(0))}
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
      <CardMedia component="img" sx={{ width: 150 }} image={level?.image} alt={level?.name} />
    </Card>
  );
}

export default GameInfo;
