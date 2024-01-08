const levelTuTien = [
  {
    name: "Luyện Khí Kỳ",
    min: 0,
    max: 9,
    image: "https://img.upanh.tv/2024/01/09/luyenkhi.png",
    color: "#8B4513",
  },
  {
    name: "Trúc Cơ Kỳ",
    min: 10,
    max: 99,
    image: "https://img.upanh.tv/2024/01/09/trucco.png",
    color: "#000000",
  },
  {
    name: "Kim Đan Kỳ",
    min: 100,
    max: 999,
    image: "https://img.upanh.tv/2024/01/09/kimdan.png",
    color: "#008000",
  },
  {
    name: "Nguyên Anh Kỳ",
    min: 1000,
    max: 9999,
    image: "https://img.upanh.tv/2024/01/09/nguyenanh.png",
    color: "#FF0000",
  },
  {
    name: "Hóa Thần Kỳ",
    min: 10000,
    max: 99999,
    image: "https://img.upanh.tv/2024/01/09/hoathan.png",
    color: "#FF69B4",
  },
  {
    name: "Luyện Hư Kỳ",
    min: 100000,
    max: 999999,
    image: "https://img.upanh.tv/2024/01/09/luyenhu.png",
    color: "#FFD700",
  },
  {
    name: "Hợp Thể Kỳ",
    min: 1000000,
    max: 9999999,
    image: "https://img.upanh.tv/2024/01/09/hopthe.png",
    color: "#C0C0C0",
  },
  {
    name: "Đại Thừa Kỳ",
    min: 10000000,
    max: 99999999,
    image: "https://img.upanh.tv/2024/01/09/daithua.png",
    color: "#FFDF00",
  },
  {
    name: "Độ Kiếp Kỳ",
    min: 100000000,
    max: 999999999999,
    image: "https://img.upanh.tv/2024/01/09/dokiep.png",
    color: "#008080",
  },
];

const loadLevel = (score) => {
  const result = levelTuTien.find((item) => item.min <= score && score <= item.max);
  return result;
};

export default loadLevel;
