import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import LightModeIcon from "@mui/icons-material/LightMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import { useColorScheme } from "@mui/material/styles";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import "./ToggleDarkMode.scss";
import { Box } from "@mui/material";

function ToggleDarkMode() {
  const { mode, setMode } = useColorScheme();
  const handleChange = (event, newOption) => {
    setMode(newOption);
  };

  return (
    <ToggleButtonGroup
      color="secondary"
      value={mode}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      size="small"
    >
      <ToggleButton value="light" size="small">
        <Box className="toggle_item">
          <LightModeIcon fontSize="small" />
          <span>Sáng</span>
        </Box>
      </ToggleButton>
      <ToggleButton value="system">
        <Box className="toggle_item">
          <SettingsBrightnessIcon fontSize="small" />
          <span>Hệ thống</span>
        </Box>
      </ToggleButton>
      <ToggleButton value="dark">
        <Box className="toggle_item">
          <DarkModeOutlinedIcon fontSize="small" />
          <span>Tối</span>
        </Box>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default ToggleDarkMode;
