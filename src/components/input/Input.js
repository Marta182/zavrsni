import React, { useState } from "react";
import "./Input.css";
import { Box, TextField, Button } from "@mui/material";

function Input({ onSendMessage }) {
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const onSubmit = (e) => {
    onSendMessage(message);
    setMessage("");
  };

  return (
    <Box className="input-container">
      <TextField
        className="input-field"
        required
        id="input-message"
        placeholder="Enter your message"
        variant="standard"
        type="text"
        value={message}
        onChange={handleInputChange}
      />
      <Button type="submit" variant="outlined" color="secondary" onClick={onSubmit}>
        SEND
      </Button>
    </Box>
  );
}

export default Input;