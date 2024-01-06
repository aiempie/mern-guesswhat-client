import axios from "axios";
import ApiUrl from "~/utils/RewriteApi";

export const getClip = async (game) => {
  try {
    const res = await axios.get(ApiUrl(`/${game}/clip/clip`));
    if (res.data) {
      return res;
    }
  } catch (error) {
    return error.response;
  }
};

export const submitClip = async (game, clip_id, level) => {
  try {
    const res = await axios.post(ApiUrl(`/${game}/play/clip`), { clip_id, level });
    if (res.data.success) {
      return res;
    }
  } catch (error) {
    return error.response;
  }
};
