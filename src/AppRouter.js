import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";
import setAuthToken from "./utils/setAuthToken";
import { Backdrop, CircularProgress } from "@mui/material";
import linkTo from "./utils/linkTo";

function AppRouter() {
  const user = useSelector((state) => {
    return state.user;
  });
  const openBackdrop = useSelector((state) => {
    return state.backdrop.state;
  });

  useEffect(() => {
    setAuthToken(user.assetToken);
    // eslint-disable-next-line
  }, []);
  return (
    <div className="main_content mt-2">
      <main>
        <Routes>
          <Route path={linkTo.home} element={<Home />} />
          <Route path={linkTo.login} element={<Login />} />
        </Routes>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={openBackdrop}
        >
          <CircularProgress color="success" />
        </Backdrop>
      </main>
    </div>
  );
}

export default AppRouter;
