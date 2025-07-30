import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  botName: "Virlib Assistant",
  initialMessages: [createChatBotMessage("Hi! I'm your virtual librarian. Ask me anything!")],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#5b3e0a",
    },
    chatButton: {
      backgroundColor: "#5b3e0a",
    },
  },
};

export default config;
