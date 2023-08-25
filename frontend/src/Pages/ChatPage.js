import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
const ChatPage = () => {

  const[chats, setChats] = useState([])

  const fetchChats = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/chat"); // Replace with your actual server URL
    const { data } = response;
    setChats(data);
    // Process or use the data here
  } catch (error) {
    console.error("Error fetching chats:", error);
  }
};

  useEffect(() => {
    fetchChats();
  }, []);


  return <div>{chats.map(chat => <div>{chat.chatName}</div>)}</div>;
}

export default ChatPage
