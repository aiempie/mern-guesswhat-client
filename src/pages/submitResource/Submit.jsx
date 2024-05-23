import { Avatar, Box } from "@mui/material";
import React from "react";
import { ReactComponent as SVGFrame } from "~/assets/rank/r1.svg";

function Submit() {
  return (
    <Box position="relative" display="inline-block">
      <Box
        component={SVGFrame}
        sx={{
          width: 150,
          height: 150,
          position: "relative",
          zIndex: 1,
        }}
      />
      <Avatar
        src="https://i.imgur.com/K25BMyq.jpeg"
        alt="Avatar"
        sx={{
          width: 100,
          height: 100,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      ></Avatar>
    </Box>
  );
}

export default Submit;
