import React, { useState } from "react";
import { Box } from "@mui/system";
import { Button, TextField } from "@mui/material";
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
    <div className = "background">
    <Box className="enter-page">
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
    </Box>
    </div>
  );
}

export default EnterScreen;
