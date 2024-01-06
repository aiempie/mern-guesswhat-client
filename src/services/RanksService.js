import axios from "axios";
import ApiUrl from "~/utils/RewriteApi";

export const getRanks = async (game) => {
  try {
    const res = await axios.get(ApiUrl(`/${game}/rank`));
    if (res.data.success) {
      return res;
    }
  } catch (error) {
    return error.response;
  }
};
