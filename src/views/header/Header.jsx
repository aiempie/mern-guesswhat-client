import {
  AppBar,
  Box,
  CardMedia,
  Container,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "~/assets/image/logo.png";
import SettingsIcon from "@mui/icons-material/Settings";
import "./Header.scss";
import ToggleDarkMode from "~/components/toggle-dark-mode/ToggleDarkMode";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleSettingClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleSettingClose = () => {
    setAnchorEl(null);
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
              <MenuItem></MenuItem>
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
