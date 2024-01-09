import React, { useEffect, useRef, useState } from "react";
import listGame from "~/config/ListGame";
import "./Chart.scss";
import { Avatar } from "@mui/material";
import { randomColor } from "~/layouts/header/Header";
import loadLevel from "~/config/capTuTien";
import { topScoreService } from "~/services/ClipService";

function Chart({ currentGame }) {
  const game = useRef(listGame.find((item) => item.section === currentGame));
  const [topScore, setTopScore] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const SECCTION = game.current.section;
    setLoading(true);
    const fetchData = async () => {
      const res = await topScoreService(SECCTION);
      if (res.data.success) {
        setTopScore(res.data.topScores);
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line
  }, []);

  return loading ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "300px",
      }}
    >
      <div className="spinner"></div>
    </div>
  ) : (
    <div className="chart_table">
      <span>
        <div className="chart_background">
          <div>
            <span className="chart_text">{`Top đạo hữu ${game.current.name} Mạnh Nhất`}</span>
          </div>
          <div className="list_item">
            {topScore?.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <Avatar src={item.image} sx={{ bgcolor: randomColor(), width: 56, height: 56 }}>
                    {item.name[0]}
                  </Avatar>
                  <div className="text_item">
                    <div className="name_text_item">{`${item.name}`}</div>
                    <div className="sub_text_item">{`${loadLevel(item.score).name}: ${
                      item.score
                    } ĐKN`}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </span>
    </div>
  );
}

export default Chart;