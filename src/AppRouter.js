import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Backdrop, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import setAuthToken from "./utils/setAuthToken";
import linkTo from "./utils/linkTo";
import Register from "./pages/register/Register";
import PageNotFound from "./pages/404/PageNotFound";
import { setBackdropFinish } from "./redux/slice/loadBackDropSlice";
import { loadUser } from "./services/authService";

function AppRouter() {
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    return state.user;
  });
  const openBackdrop = useSelector((state) => {
    return state.backdrop;
  });

  useEffect(() => {
    dispatch(setBackdropFinish());
    setAuthToken(user.assetToken);
    if (user.assetToken) {
      loadUser(dispatch);
    }
    // eslint-disable-next-line
  }, [user.assetToken]);
  return (
    <div className="main_content mt-2">
      <main>
        {user.userInfo ? (
          <Routes>
            <Route index element={<Home />} />
            <Route path={linkTo.home} element={<Home />} />
            <Route path={linkTo.login} element={<Login />} />
            <Route path={linkTo.register} element={<Register />} />
            <Route path={"*"} element={<PageNotFound />} />
          </Routes>
        ) : (
          <Routes>
            <Route index element={<Login />} />
            <Route path={linkTo.login} element={<Login />} />
            <Route path={linkTo.register} element={<Register />} />
            <Route path={"*"} element={<Login />} />
          </Routes>
        )}

        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={openBackdrop.state}
        >
          <CircularProgress color="success" />
        </Backdrop>
      </main>
    </div>
  );
}

export default AppRouter;
