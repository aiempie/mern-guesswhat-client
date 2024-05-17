import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import errGif from "~/assets/image/error.gif";
import Loading from "~/components/loading/Loading";
import ResultDialog from "~/components/result-dialog/ResultDialog";
import listGame from "~/config/ListGame";
import linkTo from "~/config/linkTo";
import { getQuiz, submitQuiz } from "~/services/QuizService";
import { loadUser } from "~/services/authService";

function Quiz({ currentGame }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    return state.user;
  });
  const [loading, setLoading] = useState(true);
  const [quiz, setQuiz] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [select, setSelect] = useState("");
  const [result, setResult] = useState({});

  const game = useRef(listGame.find((item) => item.section === currentGame));

  useEffect(() => {
    const SECCTION = game.current.section;
    setLoading(true);
    const fetchData = async () => {
      const resQuiz = await getQuiz(SECCTION);
      setQuiz(resQuiz.data.quiz);
      setLoading(false);
    };

    fetchData();
    // eslint-disable-next-line
  }, []);

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
    const res = await submitQuiz(game.current.section, quiz._id, select);
    if (res.data.success) {
      setResult({
        plusScore: res.data.plusScore,
        message: res.data.message,
        isNoCount: false,
      });
      setOpenDialog(true);
    }
  };
  const handleRefreshQuiz = async () => {
    onCloseDialog();
    setLoading(true);
    const resQuiz = await getQuiz(game.current.section);
    setQuiz(resQuiz.data.quiz);
    setLoading(false);
  };

  const onCloseDialog = () => {
    setOpenDialog(false);
    loadUser(dispatch);
    setResult();
    setSelect(0);
  };

  return loading ? (
    <Loading />
  ) : quiz ? (
    <div>
      {game.current.name}
      <ResultDialog
        isOpen={openDialog}
        result={result}
        onClose={onCloseDialog}
        handleRefreshQuiz={handleRefreshQuiz}
      />
    </div>
  ) : (
    <div className="error_container">
      <Link to={"/"}>
        <img src={errGif} alt="error-gif" />
      </Link>
      <div className="error">
        <h1>404</h1>
        <p>{`Ôi không! ${game.current.name} hiện đã hết câu hỏi`}</p>
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

export default Quiz;
