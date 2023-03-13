import React from "react";
import { createAvatar } from "@dicebear/core";
import { botttsNeutral } from "@dicebear/collection";
import "./Sidebar.css";
import { Box, List, ListItem, Avatar, Typography, Chip } from "@mui/material";

function Sidebar({ activeMembers, currentMember }) {
  const getAvatar = (username) => {
    const avatar = createAvatar(botttsNeutral, {
      seed: username,
      radius: 50,
      size: 48,
    });
    const dataUri = avatar.toDataUriSync();
    return dataUri;
  };

  return (
    <div className="sidebar">
      <Chip color="success" label="ONLINE" />
        <List>
          {activeMembers.map((user) => (
            <ListItem key={user.id}>
              <Avatar src={getAvatar(user.clientData.username)} alt="avatar" />
              {user.clientData.username}
            </ListItem>
          ))}
        </List>
    </div>
  );
}

export default Sidebar;