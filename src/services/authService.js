import axios from "axios";
import ApiUrl from "~/utils/RewriteApi";
import { clearUser, setAssetToken, setUserInfo } from "~/redux/slice/userSlice";
import setAuthToken from "../utils/setAuthToken";
import { setBackdropFinish, setLoadBackdrop } from "~/redux/slice/loadBackDropSlice";

export const loginService = async (dispatch, account) => {
  dispatch(setLoadBackdrop());
  try {
    const res = await axios.post(ApiUrl("/auth/login"), account);
    if (res.data.success) {
      dispatch(setAssetToken(res.data.accessToken));
      setAuthToken(res.data.accessToken);
      dispatch(setBackdropFinish());
      return res;
    }
  } catch (error) {
    dispatch(clearUser());
    dispatch(setBackdropFinish());
    return error.response;
  }
};
export const registerService = async (dispatch, account) => {
  dispatch(setLoadBackdrop());
  try {
    const res = await axios.post(ApiUrl("/auth/register"), account);
    if (res.data.success) {
      dispatch(setAssetToken(res.data.accessToken));
      setAuthToken(res.data.accessToken);
      dispatch(setBackdropFinish());
      return res;
    }
  } catch (error) {
    dispatch(clearUser());
    dispatch(setBackdropFinish());
    return error.response;
  }
};

export const getProfileService = async (id) => {
  try {
    const res = await axios.get(ApiUrl(`/auth/${id}`));
    if (res.data.success) {
      return res;
    }
  } catch (error) {
    return error.response;
  }
};

export const loadUser = async (dispatch) => {
  try {
    const res = await axios.get(ApiUrl("/auth/loaduser"));
    if (res.data.success) {
      dispatch(setUserInfo(res.data.user));
    }
    return res;
  } catch (error) {
    dispatch(clearUser());
    console.log(error.response);
    setAuthToken();
  }
};

export const logoutService = (dispatch) => {
  dispatch(clearUser());
  setAuthToken();
};
