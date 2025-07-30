class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;

    this.knownGenres = [
      "mythology",
      "fantasy",
      "romance",
      "science",
      "technology",
      "math",
      "engineering",
      "medical",
      "ai",
      "ml",
      "law",
      "philosophy",
      "economics",
      "history",
      "research",
      "environment",
      "psychology",
      "education",
      "tragedy",
      "drama",
      "memoir",
      "biography",
      "self-help",
      "inspiration",
      "relationships",
      "mental health",
      "faith",
      "picture books",
      "early readers",
      "young adult",
      "middle grade",
      "adventure",
      "fairy tales",
      "fables",
      "graphic novels",
      "comics",
      "poetry",
      "music",
      "art",
      "photography",
      "calligraphy",
      "cooking",
      "diy",
      "design",
      "style",
      "thriller",
    ];
  }

  parse(message) {
    const lower = message.toLowerCase();

    // Check if the message contains a known genre directly
    const matchedGenre = this.knownGenres.find((genre) =>
      lower.includes(genre)
    );

    // Book recommendation intent
    if (lower.includes("recommend") || lower.includes("suggest")) {
      if (matchedGenre) {
        this.actionProvider.handleBookRecommendation(matchedGenre);
      } else {
        this.actionProvider.askGenreForRecommendation();
      }
    }

    // User simply types a genre like: "science"
    else if (matchedGenre) {
      this.actionProvider.handleBookRecommendation(matchedGenre);
    }

    // Genre description
    else if (lower.includes("what is") && lower.includes("genre")) {
      const genreMatch = lower.match(/what is (\w+) genre/);
      if (genreMatch) {
        this.actionProvider.handleGenreDescription(genreMatch[1]);
      }
    }

    // Book summary
    else if (lower.includes("summary") || lower.includes("about book")) {
      const bookMatch = lower.match(/(?:summary|about book) (.+)/);
      if (bookMatch) {
        this.actionProvider.handleBookSummary(bookMatch[1]);
      }
    }

    // Navigation help
    else if (lower.includes("take me to")) {
      const sectionMatch = lower.match(/take me to (\w+)/);
      if (sectionMatch) {
        this.actionProvider.handleNavigation(sectionMatch[1]);
      }
    }

    // Default
    else {
      this.actionProvider.handleUnknown();
    }
  }
}

export default MessageParser;
