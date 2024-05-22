import React, { useEffect, useRef, useState } from "react";
import listGame from "~/config/ListGame";
import "./Chart.scss";
import { Avatar, Badge, Button } from "@mui/material";
import { randomColor } from "~/layouts/header/Header";
import loadLevel from "~/config/capTuTien";
import { topScoreService } from "~/services/ClipService";
import { useNavigate } from "react-router-dom";
import linkTo from "~/config/linkTo";
import Loading from "~/components/loading/Loading";
import { styled } from "@mui/material/styles";

function Chart({ currentGame }) {
  const game = useRef(listGame.find((item) => item.section === currentGame));
  const navigate = useNavigate();

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

  const handleClickItem = (id) => {
    navigate(`${linkTo.userProfile}/${id}`);
  };

  return loading ? (
    <Loading />
  ) : (
    <div>
      <Button
        className="back_button"
        size="large"
        variant="contained"
        color="success"
        sx={{ borderRadius: "20px" }}
        onClick={() => navigate(`/${game.current.section}`)}
      >
        Quay lại
      </Button>
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
                    <Badge
                      overlap="circular"
                      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                      onClick={() => handleClickItem(item._id)}
                      badgeContent={
                        <SmallAvatar
                          alt={`${index + 1}`}
                          src={
                            index === 0 || index === 1 || index === 2
                              ? `/static/top/${index + 1}.png`
                              : ``
                          }
                          sx={{ bgcolor: `lightblue` }}
                        >{`${index + 1}`}</SmallAvatar>
                      }
                      sx={{ cursor: "pointer" }}
                    >
                      <Avatar
                        src={item.image}
                        sx={{ bgcolor: randomColor(), width: 56, height: 56 }}
                      >
                        {item.name[0]}
                      </Avatar>
                    </Badge>
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
    </div>
  );
}

export default Chart;

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 30,
  height: 30,
  border: `2px solid ${theme.palette.background.paper}`,
}));
