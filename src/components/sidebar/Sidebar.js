import React from "react";
import { createAvatar } from "@dicebear/core";
import { botttsNeutral } from "@dicebear/collection";
import "./Sidebar.css";
import { Box, List, ListItem, Avatar, Typography, Chip } from "@mui/material";

function Sidebar({ activeMembers }) {
  const getAvatar = () => {
    const avatar = createAvatar(botttsNeutral);
    const dataUri = avatar.toDataUriSync();
    return dataUri;
  };

  return (
    <div className="sidebar">
      <Chip color="success" label="ONLINE" />
        <List>
          {activeMembers.map((user) => (
            <ListItem key={user.id}>
              <Avatar src={getAvatar()} alt="avatar" />
              {user.clientData.username}
            </ListItem>
          ))}
        </List>
    </div>
  );
}

export default Sidebar;