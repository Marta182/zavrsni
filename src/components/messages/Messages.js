import React from "react";
import { List, ListItem, ListItemText, Chip } from "@mui/material";
import "./Messages.css";

function Messages({ messages, currentMember }) {
  const renderMessage = (message) => {
    const { data: messageText, member: { clientData: { username } }, clientId } = message;
    const messageFromMe = currentMember.clientId === clientId;
    const color = messageFromMe ? "teal" : "lightpink";

    return (
      <ListItem key={message.id}>
        <ListItemText className="msg"
          primary={username}
          secondary={<Chip label={messageText} style={{ backgroundColor: color}} />}
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
