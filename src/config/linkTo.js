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
  submitClip: "https://forms.gle/YAn8Tpotqk92wiN98",
};
export default linkTo;
