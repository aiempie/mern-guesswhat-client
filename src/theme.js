import { deepPurple, teal, cyan } from "@mui/material/colors";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: deepPurple,
        secondary: { ...teal, contrastText: "rgba(0, 0, 0, 0.2)" },
      },
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: { ...teal, contrastText: "rgba(0, 0, 0, 0.7)" },
      },
    },
  },
});

export default theme;
