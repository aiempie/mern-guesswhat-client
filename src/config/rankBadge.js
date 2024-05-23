import r1 from "~/assets/rank/r1.svg";
import r2 from "~/assets/rank/r2.svg";
import r3 from "~/assets/rank/r3.svg";
import r4 from "~/assets/rank/r4.svg";
import r5 from "~/assets/rank/r5.svg";
import r6 from "~/assets/rank/r6.svg";
import r7 from "~/assets/rank/r7.svg";
import r8 from "~/assets/rank/r8.svg";
import r9 from "~/assets/rank/r9.svg";

const rankBadge = [r1, r2, r3, r4, r5, r6, r7, r8, r9];

const loadBadge = (list) => {
  if (!Array.isArray(list)) {
    throw new Error("Input list must be an array");
  }

  return list.map((item, index) => ({
    ...item,
    badge: rankBadge[index],
  }));
};

export default loadBadge;
