import React, { useState } from 'react';
import Chatbot from './ChatBot';
import { FaRobot } from "react-icons/fa";
import '../../Styling/chatBotWrapper.css';

const chatbotWrapper = () => {
  const [showBot, setShowBot] = useState(false);

  return (
    <div className="chatbot-wrapper">
      {showBot && (
        <div className="chatbot-box">
          <Chatbot />
        </div>
      )}
      <button className="chatbot-toggle-btn" onClick={() => setShowBot(!showBot)}>
        <FaRobot size={30} />
      </button>
    </div>
  );
};

export default chatbotWrapper;
