import aovIcon from "~/assets/image/aov.icon.jpeg";
import lolIcon from "~/assets/image/lol.icon.png";
import lolLogo from "~/assets/bg/lienminhhuyenthoai.jpg";
import pubgLogo from "~/assets/bg/pubg.png";
import cocLogo from "~/assets/bg/coc.jpg";
import aovLogo from "~/assets/bg/aov.jpeg";

const listGame = [
  {
    id: "lq",
    name: "Liên Quân Mobile",
    section: "aov",
    image: aovLogo,
    icon: aovIcon,
    isComming: true,
  },
  {
    id: "lm",
    name: "Liên Minh Huyền Thoại",
    section: "lol",
    image: lolLogo,
    icon: lolIcon,
    isComming: true,
  },
  {
    id: "coc",
    name: "Clash Of Clans",
    section: "coc",
    image: cocLogo,
    icon: "",
    isComming: false,
  },
  {
    id: "pubgm",
    name: "PUBG Mobile",
    section: "pubgm",
    image: pubgLogo,
    icon: "",
    isComming: false,
  },
];

export default listGame;
