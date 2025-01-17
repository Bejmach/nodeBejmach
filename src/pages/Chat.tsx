import React from "react";

type Message = {
  user: string;
  message: string;
};

const Chat: React.FC = () => {
  const messages: Message[] = [
    { user: "User1", message: "Lorem ipsum?" },
    { user: "User2", message: "Lorem ipsum." },
    { user: "User1", message: "LOREM IPSUM!!!" },
  ];

  return (
    <div className="container">
      <h1>Chat</h1>
      <div>
        {messages.map((msg, index) => (
          <p key={index}>
            <strong>{msg.user}:</strong> {msg.message}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Chat;
