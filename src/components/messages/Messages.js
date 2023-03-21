import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import "./Messages.css";

function Messages({ messages, currentMember }) {
  const renderMessage = (message) => {
    const { data: messageText, member: { clientData: { username } }, clientId } = message;
    const messageFromMe = currentMember.clientId === clientId;
    const color = messageFromMe ? "lavender" : "lightpink";
    const textAlign = messageFromMe ? "right" : "left";

    return (
      <ListItem key={message.id}>
        <ListItemText
          disableTypography={true}
          primary={
            <div className="username" style={{ textAlign: textAlign }}>
              {username}
            </div>
          }
          secondary={
            <div
              className="messages-cont"
              style={{
                backgroundColor: color,
                borderRadius: "16px",
                float: textAlign === "right" ? "right" : "none",
              }}
            >
              {messageText}
            </div>
          }
        />
      </ListItem>
    );
        }    

  return (
    <div className="messages-container">
      <List className="messages-list">
        {messages.map(renderMessage)}
        </List>
    </div>
  );
}

export default Messages;
