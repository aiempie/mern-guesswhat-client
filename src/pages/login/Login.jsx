import React, { useEffect, useState } from "react";
import "./Login.scss";
import logoWeb from "~/assets/image/favicon.png";
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
import { Tilt } from "react-tilt";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link, useNavigate } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import linkTo from "~/utils/linkTo";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LockResetOutlinedIcon from "@mui/icons-material/LockResetOutlined";
import { useDispatch, useSelector } from "react-redux";
import { loginService } from "~/services/authService";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => {
    return state.user;
  });
  const [showPassword, setShowPassword] = useState(false);
  const [account, setAccount] = useState({ username: "", password: "" });
  const [error, setError] = useState();
  const [errors, setErrors] = useState({
    username: "",
    password: "",
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
  const onChangeLoginForm = (event) => {
    setAccount((prevAccount) => ({ ...prevAccount, [event.target.name]: event.target.value }));
  };
  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      setError();
      const res = await loginService(dispatch, account);
      if (res.data.success === false) {
        setError(res.data.message);
      }
    }
  };
  const validateForm = () => {
    let valid = true;
    const newErrors = { username: "", password: "" };

    if (account.username.trim() === "") {
      newErrors.username = "Tài khoản không được để trống";
      valid = false;
    }

    if (account.password.trim() === "") {
      newErrors.password = "Mật khẩu không được để trống";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  return (
    <Box className="wrap-login">
      <Tilt className="login-pic" data-tilt="">
        <img src={logoWeb} alt="IMG" />
      </Tilt>
      <Box
        component="form"
        className="login-form"
        noValidate
        sx={{ mt: 1, mb: 1 }}
        onSubmit={handleLoginSubmit}
      >
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
            name="username"
            autoComplete="username"
            autoFocus
            color="secondary"
            onChange={onChangeLoginForm}
            error={Boolean(errors.username)}
            helperText={errors.username}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <LockOutlinedIcon color="secondary" sx={{ mr: 1, my: 0.5 }} />
          <FormControl variant="standard" color="secondary" fullWidth required>
            <InputLabel htmlFor="password">Mật khẩu</InputLabel>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={onChangeLoginForm}
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
        <p style={{ color: "red", fontSize: "0.75rem", marginTop: "1rem" }}>{error}</p>
        <Box className="mt-8">
          <Button variant="contained" fullWidth type="submit">
            Đăng nhập ngay
          </Button>
        </Box>
        <Box className="text-center mt-2">
          <Link to={linkTo.forgotPw}>
            Quên mật khẩu? <LockResetOutlinedIcon />
          </Link>
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
