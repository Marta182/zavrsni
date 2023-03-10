import React, { useState } from "react";
import { Box } from "@mui/system";
import { Button, Paper, TextField, Typography } from "@mui/material";
import "./EnterScreen.css";

function EnterScreen({ userEnter }) {
  const [nickname, setNickname] = useState("");

  const handleInputChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userEnter(nickname);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <Box className="enter-page">
      <Paper className="enter-form" elevation={24}>
        <TextField
          required
          id="input-nickname"
          label="Nickname"
          variant="standard"
          type="text"
          value={nickname}
          onChange={handleInputChange}
          onKeyUp={handleEnter}
        />
        <Button variant="outlined" onClick={handleSubmit}>
          Enter chat
        </Button>
        <Typography>Choose desired nickname and enjoy chatting</Typography>
      </Paper>
    </Box>
  );
}

export default EnterScreen;
