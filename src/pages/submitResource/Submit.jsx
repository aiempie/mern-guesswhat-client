import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import "./Submit.scss";
import CancelIcon from "@mui/icons-material/Cancel";
import listGame from "~/config/ListGame";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Slide from "@mui/material/Slide";
import { setBackdropFinish, setLoadBackdrop } from "~/redux/slice/loadBackDropSlice";
import { uploadImage } from "~/services/uploadImageService";
import { sendQuiz } from "~/services/QuizService";
import SnackbarAlert from "~/components/snackbar-alert/snackbarAlert";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Submit({ currentGame }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const game = useRef(listGame.find((item) => item.section === currentGame));
  const [quizData, setQuizData] = useState({
    question: "",
    correctAnswer: "",
    incorrectAnswers: "",
    image: "",
  });
  const [error, setError] = useState({
    question: "",
    correctAnswer: "",
    incorrectAnswers: "",
  });
  const [openDialog, setOpenDialog] = useState(false);
  const [textSnackbar, setTextSnackbar] = useState({ text: "Đang xử lý !", severity: "success" });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setQuizData((preC) => {
      return { ...preC, [name]: value };
    });
  };
  const handleChangeImage = (event) => {
    const { name, files } = event.target;
    if (name === "image" && files && files[0]) {
      // Lưu ảnh tạm thời vào localStorage dưới dạng Base64
      const reader = new FileReader();
      reader.onloadend = () => {
        setQuizData((prevData) => ({
          ...prevData,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(files[0]);
    }
  };
  const handleRemoveImage = () => {
    setQuizData((prevData) => ({
      ...prevData,
      image: "",
    }));
    document.getElementById("image").value = "";
  };
  const handleConfirm = () => {
    if (validate()) {
      setOpenDialog(true);
    }
  };
  const handleRefreshData = () => {
    handleRemoveImage();
    setQuizData((preC) => {
      return { ...preC, question: "", correctAnswer: "", incorrectAnswers: "", image: "" };
    });
  };

  const handleSave = async () => {
    dispatch(setLoadBackdrop());
    setOpenDialog(false);
    try {
      const param = {
        ...quizData,
        incorrectAnswers: quizData.incorrectAnswers.split("\n"),
        game: game.current.section,
      };

      if (param.image.includes("data:image")) {
        const res = await uploadImage(param.image);
        if (res.response) {
          setTextSnackbar({ text: "Đã xảy ra lỗi khi lưu ảnh!", severity: "error" });

          setOpenSnackbar(true);
          handleRefreshData();
          dispatch(setBackdropFinish());
          return;
        }
        param.image = res;
      }
      const res = await sendQuiz(param);
      if (res.success) {
        setTextSnackbar({ text: res.message, severity: "success" });
      }
    } catch (error) {
      setTextSnackbar({
        text: "Đã xảy ra lỗi khi gửi quiz. Liên hệ quản trị viên và thử lại!",
        severity: "error",
      });
    } finally {
      setOpenSnackbar(true);
      handleRefreshData();
      dispatch(setBackdropFinish());
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const validate = () => {
    setError({
      question: "",
      correctAnswer: "",
      incorrectAnswers: "",
    });
    if (quizData.question.trim() === "") {
      setError((preE) => {
        return { ...preE, question: "Không được để trống câu hỏi!" };
      });
      return false;
    }
    if (quizData.correctAnswer.trim() === "") {
      setError((preE) => {
        return { ...preE, correctAnswer: "Không được để trống đáp án đúng" };
      });
      return false;
    }
    if (quizData.incorrectAnswers.trim() === "") {
      setError((preE) => {
        return { ...preE, incorrectAnswers: "Không được để trống đáp án sai" };
      });
      return false;
    }
    return true;
  };
  return (
    <Paper elevation={8} className="submit_quiz">
      <Typography variant="h5" component="h5">
        Nhập câu hỏi về {game.current.name} mà bạn tâm đắc!
      </Typography>
      <TextField
        label="Câu hỏi"
        name="question"
        value={quizData.question}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
        helperText={error.question}
        error={error.question !== ""}
      />
      <div className="d-flex justify-content-between">
        <input type="file" name="image" id="image" accept="image/*" onChange={handleChangeImage} />
        {quizData.image && (
          <button className="btn btn-warning" type="button" onClick={handleRemoveImage}>
            <CancelIcon />
          </button>
        )}
      </div>
      {quizData.image && <img src={quizData.image} alt="Preview" style={{ maxWidth: "100%" }} />}
      <TextField
        label="Đáp án đúng"
        name="correctAnswer"
        value={quizData.correctAnswer}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
        helperText={error.correctAnswer}
        error={error.correctAnswer !== ""}
      />
      <TextField
        label="Đáp án sai - Xuống dòng để phân cách đáp án"
        multiline
        rows={4}
        name="incorrectAnswers"
        value={quizData.incorrectAnswers}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
        helperText={error.incorrectAnswers}
        error={error.incorrectAnswers !== ""}
      />
      <Box className="flex justify-end gap-4">
        <Button onClick={() => navigate(`/${game.current.section}`)}>Quay lại</Button>
        <Button onClick={handleConfirm} variant="contained" color="primary">
          Gửi
        </Button>
      </Box>
      <Dialog
        open={openDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDialog}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Xác nhận câu hỏi của bạn:</DialogTitle>
        <DialogContent>
          <DialogContentText>{`Câu hỏi: ${quizData.question}`}</DialogContentText>
          <DialogContentText>{`Đáp án đúng: ${quizData.correctAnswer}`}</DialogContentText>
          {quizData.incorrectAnswers.split("\n").map((ans, index) => {
            return (
              <DialogContentText key={index}>{`Đáp án sai thứ ${
                index + 1
              }: ${ans}`}</DialogContentText>
            );
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Thôi</Button>
          <Button onClick={handleSave} variant="contained" color="primary">
            Gửi
          </Button>
        </DialogActions>
      </Dialog>
      <SnackbarAlert
        open={openSnackbar}
        setOpen={setOpenSnackbar}
        severity={textSnackbar.severity}
        text={textSnackbar.text}
      />
    </Paper>
  );
}

export default Submit;
