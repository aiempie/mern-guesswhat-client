import listGame from "~/config/ListGame";

const linkTo = {
  home: "/",
  login: "/login",
  register: "/register",
  forgotPw: "/forgot-password",
  gameAov: listGame.find((item) => item.id === "lq").section,
  gameLol: listGame.find((item) => item.id === "lm").section,
  gameCoc: listGame.find((item) => item.id === "coc").section,
  guessRank: "xem-clip-doan-rank",
};
export default linkTo;
