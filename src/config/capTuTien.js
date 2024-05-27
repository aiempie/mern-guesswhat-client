import rank1 from "~/assets/rank/rank1.svg";
import rank2 from "~/assets/rank/rank2.svg";
import rank3 from "~/assets/rank/rank3.svg";
import rank4 from "~/assets/rank/rank4.svg";
import rank5 from "~/assets/rank/rank5.svg";
import rank6 from "~/assets/rank/rank6.svg";
import rank7 from "~/assets/rank/rank7.svg";
import rank8 from "~/assets/rank/rank8.svg";
import rank9 from "~/assets/rank/rank9.svg";

const levelTuTien = [
  {
    name: "Đấu Sư",
    min: 0,
    max: 9,
    image: rank1,
    color: "#8B4513",
  },
  {
    name: "Đại Đấu Sư",
    min: 10,
    max: 99,
    image: rank2,
    color: "#000000",
  },
  {
    name: "Đấu Linh",
    min: 100,
    max: 999,
    image: rank3,
    color: "#008000",
  },
  {
    name: "Đấu Vương",
    min: 1000,
    max: 9999,
    image: rank4,
    color: "#FF0000",
  },
  {
    name: "Đấu Hoàng",
    min: 10000,
    max: 99999,
    image: rank5,
    color: "#FF69B4",
  },
  {
    name: "Đấu Tông",
    min: 100000,
    max: 999999,
    image: rank6,
    color: "#FFD700",
  },
  {
    name: "Đấu Tôn",
    min: 1000000,
    max: 9999999,
    image: rank7,
    color: "#C0C0C0",
  },
  {
    name: "Đấu Thánh",
    min: 10000000,
    max: 99999999,
    image: rank8,
    color: "#FFDF00",
  },
  {
    name: "Đấu Đế",
    min: 100000000,
    max: 999999999999,
    image: rank9,
    color: "#008080",
  },
];

const loadLevel = (score) => {
  const result = levelTuTien.find((item) => item.min <= score && score <= item.max);
  return result;
};

export default loadLevel;
