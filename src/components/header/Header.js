import React from "react";
import { Box, Typography } from "@mui/material";
import "./Header.css";

function Header() {
  return (
    <Box className="header">
      <Typography variant="h4" className="header-text">
        Hello friend!
      </Typography>
    </Box>
  );
}

export default Header;
