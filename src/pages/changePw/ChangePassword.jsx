import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Tilt } from "react-tilt";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import logoWeb from "~/assets/image/favicon.png";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { changePasswordService } from "~/services/authService";
import SnackbarAlert from "~/components/snackbar-alert/snackbarAlert";
import { useNavigate } from "react-router-dom";
import linkTo from "~/config/linkTo";

function ChangePassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState({
    oldPass: false,
    newPass: false,
    reNewPass: false,
  });
  const [account, setAccount] = useState({ oldPass: "", newPass: "", rePassword: "" });
  const [errors, setErrors] = useState({ oldPass: "", newPass: "", rePassword: "" });
  const [textSnackbar, setTextSnackbar] = useState({ text: "Đang xử lý !", severity: "success" });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClickShowPassword = (field) =>
    setShowPassword((pred) => {
      return { ...pred, [field]: !pred[field] };
    });

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const onChangeChangePasswordForm = (event) => {
    setAccount((prevAccount) => ({ ...prevAccount, [event.target.name]: event.target.value }));
  };
  const handleChangePasswordSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      const res = await changePasswordService(dispatch, account.oldPass, account.newPass);
      if (res.data.success) {
        setTextSnackbar({
          text: `${res.data.message} Đang chuyển hướng về trang chủ`,
          severity: "success",
        });
        setTimeout(() => {
          navigate(linkTo.home);
        }, 3000);
      } else {
        setTextSnackbar({ text: res.data.message, severity: "error" });
      }
      setOpenSnackbar(true);
    }
  };
  const validateForm = () => {
    let valid = true;
    const newErrors = { oldPass: "", newPass: "", rePassword: "" };

    if (!account.newPass) {
      setErrors((preError) => ({ ...preError, newPass: "Vui lòng nhập mật khẩu" }));
      return false;
    } else if (account.newPass.length < 6) {
      setErrors((preError) => ({ ...preError, newPass: "Mật khẩu phải có ít nhất 6 ký tự" }));
      return false;
    }

    if (!account.rePassword) {
      setErrors((preError) => ({ ...preError, rePassword: "Vui lòng nhập lại mật khẩu" }));
      return false;
    } else if (account.rePassword !== account.newPass) {
      setErrors((preError) => ({ ...preError, rePassword: "Mật khẩu không khớp" }));
      return false;
    }

    setErrors(newErrors);
    return valid;
  };

  return (
    <Box className="wrap-register">
      <Box
        component="form"
        className="register-form"
        noValidate
        sx={{ mt: 1, mb: 1 }}
        onSubmit={handleChangePasswordSubmit}
      >
        <Typography component="h1" variant="h4" className="text-center">
          Thay đổi mật khẩu
        </Typography>
        <Box sx={{ display: "flex", alignItems: "flex-end", mt: 1 }}>
          <LockOutlinedIcon color="secondary" sx={{ mr: 1, my: 0.5 }} />
          <FormControl variant="standard" size="small" color="secondary" fullWidth required>
            <InputLabel htmlFor="password">Mật khẩu cũ</InputLabel>
            <Input
              id="oldPass"
              name="oldPass"
              type={showPassword.oldPass ? "text" : "password"}
              onChange={onChangeChangePasswordForm}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => handleClickShowPassword("oldPass")}
                    onMouseDown={handleMouseDownPassword}
                    color="secondary"
                  >
                    {showPassword.oldPass ? <VisibilityOff /> : <Visibility />}
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
            <InputLabel htmlFor="password">Mật khẩu mới</InputLabel>
            <Input
              id="newPass"
              name="newPass"
              type={showPassword.newPass ? "text" : "password"}
              onChange={onChangeChangePasswordForm}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => handleClickShowPassword("newPass")}
                    onMouseDown={handleMouseDownPassword}
                    color="secondary"
                  >
                    {showPassword.newPass ? <VisibilityOff /> : <Visibility />}
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
              type={showPassword.reNewPass ? "text" : "password"}
              name="rePassword"
              onChange={onChangeChangePasswordForm}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => handleClickShowPassword("reNewPass")}
                    onMouseDown={handleMouseDownPassword}
                    color="secondary"
                  >
                    {showPassword.reNewPass ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText error>{errors.rePassword}</FormHelperText>
          </FormControl>
        </Box>
        <Box className="mt-8">
          <Button variant="contained" fullWidth type="submit">
            Lưu
          </Button>
        </Box>
      </Box>
      <Tilt className="register-pic" data-tilt="">
        <img src={logoWeb} alt="IMG" />
      </Tilt>
      <SnackbarAlert
        open={openSnackbar}
        setOpen={setOpenSnackbar}
        severity={textSnackbar.severity}
        text={textSnackbar.text}
      />
    </Box>
  );
}

export default ChangePassword;
