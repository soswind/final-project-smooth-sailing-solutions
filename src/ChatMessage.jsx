import React from 'react';
import './App.css';

const ChatMessage = ({ sender, message }) => {
  const messageClass = sender === 'User' ? 'user-message' : 'bot-message';

  if (!sender) {
    return null; // Returnerer null, hvis sender er falsy
  }

  return (
    <div className={`chat-message ${messageClass}`}>
      <div className="message-sender">{sender}:</div>
      <p className="message-text">{message}</p>
    </div>
  );
};

export default ChatMessage;


