import React from "react";
import { List, ListItem, ListItemText, Chip } from "@mui/material";
import "./Messages.css";

function Messages({ messages, currentMember }) {
  const renderMessage = (message) => {
    const { data: messageText, member: { clientData: { username } }, id: memberId } = message;
    const color = "#" + ((1<<24)*Math.random() | 0).toString(16); 

    return (
      <ListItem key={message.id}>
        <ListItemText
          primary={username}
          secondary={<Chip label={messageText} style={{ backgroundColor: color }} />}
        />
      </ListItem>
    );
  };

  return (
    <div className="messages-container">
      <List className="messages-list">
      {messages.map(renderMessage)}
      </List>
    </div>
  );
}

export default Messages;
