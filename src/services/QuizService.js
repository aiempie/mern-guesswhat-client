import axios from "axios";
import ApiUrl from "~/utils/RewriteApi";

export const getQuiz = async (game) => {
  try {
    const res = await axios.get(ApiUrl(`/${game}/quiz/quiz`));
    if (res.data) {
      return res;
    }
  } catch (error) {
    return error.response;
  }
};

export const submitQuiz = async (game, quiz_id, answer) => {
  try {
    const res = await axios.post(ApiUrl(`/${game}/play/quiz`), { quiz_id, chooseAnswer: answer });
    if (res.data.success) {
      return res;
    }
  } catch (error) {
    return error.response;
  }
};

export const sendQuiz = async (quiz) => {
  try {
    const res = await axios.post(ApiUrl(`/user/add-quiz/`), quiz);
    if (res.data.success) {
      return res;
    }
  } catch (error) {
    return error.response;
  }
};
