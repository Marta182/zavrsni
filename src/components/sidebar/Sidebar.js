import React from "react";
import { createAvatar } from "@dicebear/core";
import { lorelei } from "@dicebear/collection";
import "./Sidebar.css";
import { Paper, List, ListItem, Avatar, Chip } from "@mui/material";

function Sidebar({ activeMembers }) {
  const getAvatar = (userId) => {
    const avatar = createAvatar(lorelei, {
      seed: userId.toString(),
    });
    const dataUri = avatar.toDataUriSync();
    return dataUri;
  };

  return (
    <Paper elevation={9} className="sidebar">
      <Chip variant="outlined" color="secondary" label="Online members" />
        <List>
          {activeMembers.map((user) => (
            <ListItem key={user.id}>
              <Avatar src={getAvatar(user.id)} alt="avatar" />
              {user.clientData.username}
            </ListItem>
          ))}
        </List>
    </Paper>
  );
}

export default Sidebar;
