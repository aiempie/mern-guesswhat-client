const levelTuTien = [
  {
    name: "Luyện Khí Kỳ",
    min: 0,
    max: 9,
    image: "",
    color: "#8B4513",
  },
  {
    name: "Trúc Cơ Kỳ",
    min: 10,
    max: 99,
    image: "",
    color: "#000000",
  },
  {
    name: "Kim Đan Kỳ",
    min: 100,
    max: 999,
    image: "",
    color: "#008000",
  },
  {
    name: "Nguyên Anh Kỳ",
    min: 1000,
    max: 9999,
    image: "",
    color: "#FF0000",
  },
  {
    name: "Hóa Thần Kỳ",
    min: 10000,
    max: 99999,
    image: "",
    color: "#FF69B4",
  },
  {
    name: "Luyện Hư Kỳ",
    min: 100000,
    max: 999999,
    image: "",
    color: "#FFD700",
  },
  {
    name: "Hợp Thể Kỳ",
    min: 1000000,
    max: 9999999,
    image: "",
    color: "#C0C0C0",
  },
  {
    name: "Đại Thừa Kỳ",
    min: 10000000,
    max: 99999999,
    image: "",
    color: "#FFDF00",
  },
  {
    name: "Độ Kiếp Kỳ",
    min: 100000000,
    max: 999999999999,
    image: "",
    color: "#008080",
  },
];

const loadLevel = (score) => {
  const result = levelTuTien.find((item) => item.min <= score && score <= item.max);
  return result;
};

export default loadLevel;
