import React, { useState } from "react";
import { Box } from "@mui/system";
import { Button, Paper, TextField } from "@mui/material";
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

  return (
    <Box className="enter-page">
      <Paper className="enter-form" elevation={24}>
        <TextField label="Choose a nickname" color="secondary"
          required
          id="input-nickname"
          variant="standard"
          type="text"
          value={nickname}
          onChange={handleInputChange}
        />
        <Button variant="outlined" color="secondary" onClick={handleSubmit}>
          Enter chat
        </Button>
      </Paper>
    </Box>
  );
}

export default EnterScreen;
