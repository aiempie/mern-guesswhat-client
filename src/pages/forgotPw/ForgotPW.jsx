import React, { useState } from "react";
import logoWeb from "~/assets/image/favicon.png";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Tilt } from "react-tilt";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import linkTo from "~/utils/linkTo";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import InputIcon from "@mui/icons-material/Input";
import isValidEmail from "~/utils/isValidEmail";

function ForgotPW() {
  const [information, setInformation] = useState();
  const [error, setError] = useState();
  const [errors, setErrors] = useState({
    username: "",
    email: "",
  });

  const onChangeForgotPwForm = (event) => {
    setInformation((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  const handleForgotPwSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      setError();
      console.log(information);
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { username: "", email: "" };

    if (information.username.trim() === "") {
      newErrors.username = "Tài khoản không được để trống";
      valid = false;
    }

    if (!information.email) {
      setErrors((preError) => ({ ...preError, email: "Vui lòng nhập email" }));
      return false;
    } else if (!isValidEmail(information.email)) {
      setErrors((preError) => ({ ...preError, email: "Email không hợp lệ" }));
      return false;
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
        onSubmit={handleForgotPwSubmit}
      >
        <Typography component="h1" variant="h4" className="text-center">
          Quên mật khẩu
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
            onChange={onChangeForgotPwForm}
            error={Boolean(errors.username)}
            helperText={errors.username}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AlternateEmailIcon color="secondary" sx={{ mr: 1, my: 0.5 }} />
          <TextField
            id="email"
            label="Email"
            required
            variant="standard"
            fullWidth
            margin="normal"
            name="email"
            autoComplete="email"
            color="secondary"
            onChange={onChangeForgotPwForm}
            error={Boolean(errors.email)}
            helperText={errors.email}
          />
        </Box>
        <p style={{ color: "red", fontSize: "0.75rem", marginTop: "1rem" }}>{error}</p>
        <Box className="mt-8">
          <Button variant="contained" fullWidth type="submit">
            Khôi phục mật khẩu
          </Button>
        </Box>
        <Box className="text-center mt-2">
          <Link to={linkTo.login}>
            Đăng nhập <InputIcon />
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

export default ForgotPW;
