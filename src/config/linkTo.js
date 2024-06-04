import listGame from "~/config/ListGame";

const linkTo = {
  home: "/",
  login: "/dang-nhap",
  register: "/dang-ky",
  forgotPw: "/quen-mat-khau",
  changePw: "/thay-doi-mat-khau",
  userProfile: "/profile",
  gameAov: listGame.find((item) => item.id === "lq").section,
  gameLol: listGame.find((item) => item.id === "lm").section,
  gameCoc: listGame.find((item) => item.id === "coc").section,
  guessRank: "xem-clip-doan-rank",
  chart: "bang-xep-hang",
  quiz: "quiz",
  submitQuiz: "gui-cau-do",
  getPoint: "nhan-them-diem",
  submitClip: "https://forms.gle/YAn8Tpotqk92wiN98",
};
export default linkTo;
