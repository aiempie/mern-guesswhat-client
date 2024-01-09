import React, { useEffect, useRef, useState } from "react";
import LoadVideo from "~/components/load-video/LoadVideo";
import errGif from "~/assets/image/error.gif";
import "./GuessRank.scss";
import listGame from "~/config/ListGame";
import { Link } from "react-router-dom";
import { getRanks } from "~/services/RanksService";
import { useDispatch, useSelector } from "react-redux";
import { getClip, submitClip } from "~/services/ClipService";
import LoadRanks from "~/components/load-rank/LoadRanks";
import { Button } from "@mui/material";
import { loadUser } from "~/services/authService";
import ResultDialog from "~/components/result-dialog/ResultDialog";
import linkTo from "~/config/linkTo";

function GuessRank({ currentGame }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    return state.user;
  });

  const [loading, setLoading] = useState(true);
  const [clip, setClip] = useState(null);
  const [ranks, setRanks] = useState(null);
  const [select, setSelect] = useState(0);
  const [result, setResult] = useState({});
  const [openDialog, setOpenDialog] = useState(false);

  const game = useRef(listGame.find((item) => item.section === currentGame));

  useEffect(() => {
    const SECCTION = game.current.section;
    setLoading(true);
    const fetchData = async () => {
      const resRanks = await getRanks(SECCTION);
      setRanks(resRanks.data.listRanks);
      const resClip = await getClip(SECCTION);
      setClip(resClip.data.clip);
      setLoading(false);
    };

    fetchData();
    // eslint-disable-next-line
  }, []);

  const reportClip = () => {};

  const submit = async () => {
    if (user.userInfo.playCount <= 0) {
      setResult({
        plusScore: 0,
        message: "Bạn đã hết lượt chơi! Kiếm thêm lượt chơi để tiếp tục.",
        isNoCount: true,
      });
      setOpenDialog(true);
      return;
    }
    const res = await submitClip(game.current.section, clip._id, select);
    if (res.data.success) {
      setResult({
        plusScore: res.data.plusScore,
        message: res.data.message,
        isNoCount: false,
      });
      setOpenDialog(true);
    }
  };

  const handleRefreshClip = async () => {
    onCloseDialog();
    setLoading(true);
    const resClip = await getClip(game.current.section);
    setClip(resClip.data.clip);
    setLoading(false);
  };

  const onCloseDialog = () => {
    setOpenDialog(false);
    loadUser(dispatch);
    setResult();
    setSelect(0);
  };

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
  ) : clip && ranks ? (
    <>
      <LoadVideo clip={clip} />
      <LoadRanks ranks={ranks} setSelect={setSelect} select={select} />
      <div className="buttons_wrapper">
        {/* <Button
          size="large"
          variant="contained"
          color="error"
          sx={{ borderRadius: "20px", width: "clamp(75px,18vw,150px)" }}
          onClick={() => reportClip()}
        >
          Báo cáo
        </Button> */}
        <Button
          size="large"
          variant="contained"
          color="success"
          sx={{ borderRadius: "20px", width: "clamp(75px,18vw,150px)" }}
          disabled={select === 0}
          onClick={() => submit()}
        >
          Xác Nhận
        </Button>
        <ResultDialog
          isOpen={openDialog}
          result={result}
          onClose={onCloseDialog}
          handleRefreshClip={handleRefreshClip}
        />
      </div>
    </>
  ) : (
    <div className="error_container">
      <Link to={"/"}>
        <img src={errGif} alt="error-gif" />
      </Link>
      <div className="error">
        <h1>404</h1>
        <p>{`Ôi không! ${game.current.name} hiện đã hết clip`}</p>
        <div className="flex justify-between">
          <Link to={"/"}>Về trang chủ</Link>
          <Link to={linkTo.submitClip} className="text-yellow-500" target="_blank">
            Đóng góp Clip
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GuessRank;
