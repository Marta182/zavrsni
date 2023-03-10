import { useState } from 'react';
import { createAvatar } from '@dicebear/core';
import { micah } from '@dicebear/collection';
import {
  Box,
  List,
  ListItem,
  Avatar,
  Typography,
  Chip
} from '@mui/material';
import './Sidebar.css';

function Sidebar({ activeMembers, currentMember }) {
  const getAvatar = (username) => {
    const avatar = createAvatar(micah, {
      seed: username,
      radius: 50,
      size: 48
    });
    return avatar.toDataUri();
  };

  return (
    <Box className="sidebar">
      <Box className="current-member">
        <Avatar
          src={getAvatar(currentMember.username)}
          alt={currentMember.username}
        />
        <Typography variant="h5">{currentMember.username}</Typography>
      </Box>

      <Chip label="ACTIVE MEMBERS" />

      <Box className="active-members">
        <Typography component="div" variant="body1" />
        <List>
          {activeMembers.map((member) => (
            <ListItem key={member.id}>
              <Avatar
                src={getAvatar(member.clientData.username)}
                alt={member.clientData.username}
              />
              {member.clientData.username}
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default Sidebar;
