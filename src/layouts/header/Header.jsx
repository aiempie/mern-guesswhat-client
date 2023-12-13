import {
  AppBar,
  Avatar,
  Box,
  CardMedia,
  Container,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  MenuList,
  Toolbar,
  Tooltip,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "~/assets/image/logo.png";
import SettingsIcon from "@mui/icons-material/Settings";
import "./Header.scss";
import ToggleDarkMode from "~/components/toggle-dark-mode/ToggleDarkMode";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "@mui/icons-material";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import linkTo from "~/config/linkTo";
import { logoutService } from "~/services/authService";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => {
    return state.user;
  });
  const [anchorEl, setAnchorEl] = useState(null);
  const bgColor = useRef(randomColor());
  const handleSettingClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleSettingClose = () => {
    setAnchorEl(null);
  };
  const handleClickLogout = () => {
    logoutService(dispatch);
    handleSettingClose();
  };
  const handleClickLogin = () => {
    handleSettingClose();
    navigate(linkTo.login);
  };
  const handleClickRegister = () => {
    handleSettingClose();
    navigate(linkTo.register);
  };
  const handleClickProfile = () => {
    console.log(bgColor);
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar className="tool_bar">
          <Link to="/" className="logo">
            <CardMedia
              component="img"
              sx={{
                height: "60px",
                width: "300px",
                objectFit: "contain",
                marginLeft: "10px",
              }}
              image={logo}
              alt={"Guess What"}
            ></CardMedia>
          </Link>
          <Box>
            <Tooltip title="Settings">
              <IconButton
                onClick={handleSettingClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={Boolean(anchorEl) ? "setting-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={Boolean(anchorEl) ? "true" : undefined}
              >
                <SettingsIcon sx={{ color: "#009688" }} />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              id="setting-menu"
              open={Boolean(anchorEl)}
              onClose={handleSettingClose}
              PaperProps={paperProps}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem>
                <ToggleDarkMode />
              </MenuItem>
              <Divider />
              {user.userInfo ? (
                <MenuList>
                  <MenuItem onClick={handleClickProfile}>
                    <Avatar src={user.userInfo.image} sx={{ bgcolor: bgColor.current }}>
                      {user.userInfo.fullname[0]}
                    </Avatar>{" "}
                    {user.userInfo.fullname}
                  </MenuItem>
                  <MenuItem onClick={handleClickLogout}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Đăng xuất
                  </MenuItem>
                </MenuList>
              ) : (
                <MenuList>
                  <MenuItem onClick={handleClickLogin}>
                    <ListItemIcon>
                      <LoginIcon fontSize="small" />
                    </ListItemIcon>
                    Đăng nhập
                  </MenuItem>
                  <MenuItem onClick={handleClickRegister}>
                    <ListItemIcon>
                      <PersonAddAlt1Icon fontSize="small" />
                    </ListItemIcon>
                    Đăng ký
                  </MenuItem>
                </MenuList>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;

const paperProps = {
  elevation: 0,
  sx: {
    "overflow": "visible",
    "filter": "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    "mt": 1.5,
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: "background.paper",
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
};
const randomColor = () => {
  const listColor = [
    "#2196F3",
    "#4CAF50",
    "#F44336",
    "#FF5722",
    "#9C27B0",
    "#E91E63",
    "#9E9E9E",
    "#FFC107",
    "#00BCD4",
    "#009688",
  ];
  const randomIndex = Math.floor(Math.random() * listColor.length);
  return listColor[randomIndex];
};
