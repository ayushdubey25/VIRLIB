
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleBookRecommendation = async (genre) => {
    this.addMessage(`🔎 Searching for ${genre} books...`);

    try {
      const res = await fetch(
        `https://virlib-1.onrender.com/api/openlibrary/genre/chatbot/${genre}`
      );

      const books = await res.json();

      if (books.length > 0) {
        const formatted = books
          .map(
            (b, i) =>
              `${i + 1}. ${b.title} by ${b.author_name} (${
                b.first_publish_year || "year N/A"
              })`
          )
          .join("\n");

        this.addMessage(`📚 Here are some ${genre} books:\n${formatted}`);
      } else {
        this.addMessage(`❌ Sorry, no ${genre} books found at the moment.`);
      }
    } catch (error) {
      console.error("Error fetching books:", error);
      this.addMessage("⚠ Failed to fetch books. Please try again later.");
    }
  };

  askGenreForRecommendation = () => {
    this.addMessage("📖 Which genre are you interested in?");
  };

  addMessage = (text) => {
    const message = this.createChatBotMessage(text);
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  handleUnknown = () => {
    this.addMessage("❓ Sorry, I didn't understand that. Could you rephrase?");
  };
  handleGreeting = () => {
    this.addMessageToState("Hello! How can I assist you with books today?");
  };

  handleThanks = () => {
    this.addMessageToState(
      "You're welcome! Let me know if you need anything else."
    );
  };

  handleGoodbye = () => {
    this.addMessageToState("Goodbye! Happy reading 😊");
  };
}

export default ActionProvider;
