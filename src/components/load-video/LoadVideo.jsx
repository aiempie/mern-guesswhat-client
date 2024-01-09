import { CardMedia } from "@mui/material";
import React from "react";
import "./LoadVideo.scss";

function LoadVideo({ clip }) {
  return !clip ? (
    ""
  ) : (
    <>
      <div className="clip_player_wrapper">
        <div className="player_wrapper">
          <CardMedia
            className="play_media"
            component="iframe"
            src={`https://www.youtube.com/embed/${clip.clip_id}`}
          ></CardMedia>
        </div>
      </div>
      <h4 className="clip_credit">Người chơi: {clip.owner}</h4>
    </>
  );
}

export default LoadVideo;
