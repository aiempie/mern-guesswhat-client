import React from "react";
import "./Login.scss";
import logoWeb from "~/assets/image/favicon.png";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Tilt } from "react-tilt";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import linkTo from "~/utils/linkTo";

function Login() {
  return (
    <Box className="wrap-login">
      <Tilt className="login-pic" data-tilt="">
        <img src={logoWeb} alt="IMG" />
      </Tilt>
      <Box component="form" className="login-form" noValidate sx={{ mt: 1, mb: 1 }}>
        <Typography component="h1" variant="h4" className="text-center">
          Đăng Nhập
        </Typography>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <PersonOutlineOutlinedIcon color="secondary" sx={{ mr: 1, my: 0.5 }} />
          <TextField
            id="username"
            label="Tài khoản"
            required
            variant="standard"
            fullWidth
            margin="normal"
            name="email"
            autoComplete="username"
            autoFocus
            color="secondary"
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <LockOutlinedIcon color="secondary" sx={{ mr: 1, my: 0.5 }} />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Mật khẩu"
            type="password"
            id="password"
            autoComplete="password"
            variant="standard"
            color="secondary"
          />
        </Box>
        <Box className="mt-4">
          <Button variant="contained" fullWidth>
            Login
          </Button>
        </Box>
        <Box className="text-center mt-2">
          <Link to={linkTo.forgotPw}>Quên mật khẩu?</Link>
        </Box>
        <Box className="text-center pt-12">
          <Link to={linkTo.register}>
            Tạo tài khoản <NavigateNextIcon />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
