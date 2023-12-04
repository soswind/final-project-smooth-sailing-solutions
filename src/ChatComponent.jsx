import React, { useState } from 'react';
import ChatMessage from './ChatMessage';
import './App.css';

const ChatComponent = () => {
    const [messages, setMessages] = useState([
        { id: 1, sender: 'User', message: 'Hej med dig, det er længe siden sidst.'},
        { id: 2, sender: 'Bot', message: 'Hvordan går det?' },
        { id: 3, sender: 'User', message: 'Det går godt! Hvordan har du det?' },
    ]);

    const [currentMessage, setCurrentMessage] = useState('');
    const [currentSender, setCurrentSender] = useState('User');

    const handleSendMessage = () => {
        const newMessage = { id: messages.length + 1, sender: currentSender, message: currentMessage };
        setMessages([...messages, newMessage]);
        setCurrentMessage('');
    };

    return (
        
        <div className="chat">
            <div className="message-input">
                {messages.map((message) => (
                    <ChatMessage key={message.id} sender={message.sender} message={message.message} />
                ))}
        </div>
        <div className="input-container">
        <input className="message-input" type="text" 
        value={currentMessage} 
        onChange={(e) => setCurrentMessage(e.target.value)} 
        placeholder='Write your message'
        />
        <button className="send-button" onClick={handleSendMessage}>SEND</button>
        </div>
        </div>
    );
};

export default ChatComponent;