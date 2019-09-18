import React, { useState, useEffect } from "react";
import MessageBox from "./MessageBox";
import { messageService } from "./messageService";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  const handleClear = () => {
    messageService.clearMessages();
  };
  const handleButtonClick = () => {
    messageService.sendMessage(text);
    setText("");
  };
  const handleInputChange = e => setText(e.target.value);

  useEffect(() => {
    messageService.subscribe(messages => setMessages(messages));
  }, []);

  return (
    <div className="App">
      <div className="MessageContainer">
        {messages.map((message, idx) => (
          <MessageBox className="MessageBox" key={idx} message={message} />
        ))}
      </div>
      <input
        type="text"
        name="messageInput"
        id="messageInput"
        value={text}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Add Message</button> <br />
      <button onClick={handleClear}>Clear All</button>
    </div>
  );
}

export default App;
