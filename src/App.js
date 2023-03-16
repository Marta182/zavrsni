import EnterScreen from "./components/login/EnterScreen";
import { useState } from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Messages from "./components/messages/Messages";
import Input from "./components/input/Input";
import { CssBaseline, Box, Paper } from "@mui/material";
import "./App.css";

function App() {
  const [chatMember, setChatMember] = useState({
    chatId: "",
    username: "",
    avatar: "",
  });
  const [chat, setChat] = useState(null);
  const [chatRoom, setChatRoom] = useState(null);
  const [activeMembers, setActiveMembers] = useState([]);
  const [messages, setMessages] = useState([]);

  const handleEnterChat = (username) => {
    const member = { ...chatMember, username };
    setChatMember(member);
    const chat = connectToChat(member);
    const room = subscribeToRoom(chat);
    getRoomMembers(room);
  };

  const connectToChat = (member) => {
    const drone = new window.Scaledrone("hCfZrRWHYAypJvMB", { data: member });
    setChat(drone);
    return drone;
  };
  
  const subscribeToRoom = (chat) => {
    const room = chat.subscribe("observable-room");
    room.on("message", (message) => setMessages((prev) => [...prev, message]));
    setChatRoom(room);
    return room;
  };

  const getRoomMembers = (room) => {
    room.on("members", (members) => {
      setActiveMembers(members);
      setChatRoom(room);
    });
  
    room.on("member_leave", (member) => {
      setActiveMembers((prevMembers) =>
        prevMembers.filter((m) => m.id !== member.id)
      );
    });
  };
  
  const onSendMessage = (message) => {
    chat.publish({
      room: "observable-room",
      message,
    });
  };

  const handleLogout = () => {
    setChatMember({ chatId: "", username: "", avatar: "" });
    setChat(null);
    setChatRoom(null);
    setActiveMembers([]);
    setMessages([]);
  };

  return (
      <div className="app">
        <CssBaseline />
        {chatMember.username === "" ? (
          <EnterScreen userEnter={handleEnterChat} />
        ) : (
          <>
            <Header onLogout={handleLogout} chatMember={chatMember} />
            <Paper className="chat-main" elevation={24}>
              <Sidebar activeMembers={activeMembers}/>
              <Box className="chat">
                <Messages
                  className="messages"
                  messages={messages}
                  currentMember={chatMember}
                />
                <Input className="chat-input" onSendMessage={onSendMessage} />
              </Box>
              
            </Paper>
          </>
        )}
      </div>
    );
}

export default App;