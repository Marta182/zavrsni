import React from "react";
import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import "./Header.css";

function Header({ onLogout }) {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <Box className="header">
      <Typography variant="h4" className="header-text"> 
        Hello friend!
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        className="logout-button"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </Box>
  );
}

export default Header;
