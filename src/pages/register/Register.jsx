import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import logoWeb from "~/assets/image/favicon.png";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { Link, useNavigate } from "react-router-dom";
import linkTo from "~/utils/linkTo";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LockResetOutlinedIcon from "@mui/icons-material/LockResetOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import "./Register.scss";
import { useSelector } from "react-redux";
import isValidEmail from "~/utils/isValidEmail";

function Register() {
  const navigate = useNavigate();
  const user = useSelector((state) => {
    return state.user;
  });
  const [showPassword, setShowPassword] = useState(false);
  const [account, setAccount] = useState({ username: "", password: "", fullname: "", email: "" });
  const [error, setError] = useState();
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    rePassword: "",
    fullname: "",
    email: "",
  });
  useEffect(() => {
    if (user.userInfo) {
      navigate(linkTo.home);
    }
    // eslint-disable-next-line
  }, [user.userInfo]);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const onChangeRegisterForm = (event) => {
    setAccount((prevAccount) => ({ ...prevAccount, [event.target.name]: event.target.value }));
  };
  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setError();
      console.log(account);
    }
  };
  const validateForm = () => {
    setErrors({ username: "", password: "", rePassword: "", fullname: "", email: "" });

    if (!account.username) {
      setErrors((preError) => ({ ...preError, username: "Vui lòng nhập tài khoản" }));
      return false;
    }

    if (!account.fullname) {
      setErrors((preError) => ({ ...preError, fullname: "Vui lòng nhập tên hiển thị" }));
      return false;
    }

    if (!account.email) {
      setErrors((preError) => ({ ...preError, email: "Vui lòng nhập email" }));
      return false;
    } else if (!isValidEmail(account.email)) {
      setErrors((preError) => ({ ...preError, email: "Email không hợp lệ" }));
      return false;
    }

    if (!account.password) {
      setErrors((preError) => ({ ...preError, password: "Vui lòng nhập mật khẩu" }));
      return false;
    } else if (account.password.length < 6) {
      setErrors((preError) => ({ ...preError, password: "Mật khẩu phải có ít nhất 6 ký tự" }));
      return false;
    }

    if (!account.rePassword) {
      setErrors((preError) => ({ ...preError, rePassword: "Vui lòng nhập lại mật khẩu" }));
      return false;
    } else if (account.rePassword !== account.password) {
      setErrors((preError) => ({ ...preError, rePassword: "Mật khẩu không khớp" }));
      return false;
    }
  };

  return (
    <Box className="wrap-register">
      <Box
        component="form"
        className="register-form"
        noValidate
        sx={{ mt: 1, mb: 1 }}
        onSubmit={handleRegisterSubmit}
      >
        <Typography component="h1" variant="h4" className="text-center">
          Đăng Ký
        </Typography>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <PersonOutlineOutlinedIcon color="secondary" sx={{ mr: 1, my: 0.5 }} />
          <TextField
            id="username"
            label="Tài khoản"
            required
            variant="standard"
            size="small"
            fullWidth
            margin="normal"
            name="username"
            autoComplete="username"
            autoFocus
            color="secondary"
            onChange={onChangeRegisterForm}
            error={Boolean(errors.username)}
            helperText={errors.username}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end", mt: 1, height: "48px" }}>
          <AccountCircleOutlinedIcon color="secondary" sx={{ mr: 1, my: 0.5 }} />
          <TextField
            id="fullname"
            label="Tên hiển thị"
            required
            variant="standard"
            size="small"
            fullWidth
            margin="normal"
            name="fullname"
            color="secondary"
            onChange={onChangeRegisterForm}
            error={Boolean(errors.fullname)}
            helperText={errors.fullname}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end", mt: 1, height: "48px" }}>
          <AlternateEmailIcon color="secondary" sx={{ mr: 1, my: 0.5 }} />
          <TextField
            id="email"
            label="Email"
            required
            variant="standard"
            size="small"
            fullWidth
            margin="normal"
            name="email"
            autoComplete="email"
            color="secondary"
            onChange={onChangeRegisterForm}
            error={Boolean(errors.email)}
            helperText={errors.email}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <LockOutlinedIcon color="secondary" sx={{ mr: 1, my: 0.5 }} />
          <FormControl variant="standard" size="small" color="secondary" fullWidth required>
            <InputLabel htmlFor="password">Mật khẩu</InputLabel>
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              onChange={onChangeRegisterForm}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    color="secondary"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText error>{errors.password}</FormHelperText>
          </FormControl>
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end", mt: 1 }}>
          <LockOutlinedIcon color="secondary" sx={{ mr: 1, my: 0.5 }} />
          <FormControl variant="standard" size="small" color="secondary" fullWidth required>
            <InputLabel htmlFor="re-password">Nhập lại mật khẩu</InputLabel>
            <Input
              id="re-password"
              type={showPassword ? "text" : "password"}
              name="rePassword"
              onChange={onChangeRegisterForm}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    color="secondary"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText error>{errors.rePassword}</FormHelperText>
          </FormControl>
        </Box>
        <p style={{ color: "red", fontSize: "0.75rem", marginTop: "1rem" }}>{error}</p>
        <Box className="mt-8">
          <Button variant="contained" fullWidth type="submit">
            Đăng ký
          </Button>
        </Box>
        <Box className="text-center mt-2">
          <Link to={linkTo.forgotPw}>
            Quên mật khẩu? <LockResetOutlinedIcon />
          </Link>
        </Box>
        <Box className="text-center pt-12">
          <Link to={linkTo.login}>
            <NavigateBeforeIcon /> Đăng nhập ngay
          </Link>
        </Box>
      </Box>
      <Tilt className="register-pic" data-tilt="">
        <img src={logoWeb} alt="IMG" />
      </Tilt>
    </Box>
  );
}

export default Register;
