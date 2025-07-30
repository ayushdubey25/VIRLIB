// class ActionProvider {
// constructor(createChatBotMessage, setStateFunc) {
//   this.createChatBotMessage = createChatBotMessage;
//   this.setState = setStateFunc;
// }

// 📚 Book recommendations
// handleBookRecommendation = (genre) => {
//     const data = {
//   "mythology": [
//     "Circe",
//     "The Song of Achilles",
//     "Norse Mythology",
//     "American Gods",
//     "Mythos"
//   ],
//   "fantasy": [
//     "Harry Potter",
//     "Mistborn",
//     "Eragon",
//     "The Name of the Wind",
//     "A Court of Thorns and Roses"
//   ],
//   "romance": [
//     "Pride & Prejudice",
//     "Me Before You",
//     "The Notebook",
//     "The Time Traveler\u2019s Wife",
//     "Outlander"
//   ],
//   "horror": [
//     "It",
//     "The Haunting of Hill House",
//     "Dracula",
//     "The Exorcist",
//     "Bird Box"
//   ],
//   "legends": [
//     "The Once and Future King",
//     "The Mists of Avalon",
//     "Beowulf",
//     "The King of Ys",
//     "The Palace of Illusions"
//   ],
//   "fairytales": [
//     "Stardust",
//     "The Bloody Chamber",
//     "East",
//     "Uprooted",
//     "The Hazel Wood"
//   ],
//   "graphicNovels": [
//     "Saga",
//     "Watchmen",
//     "Maus",
//     "Persepolis",
//     "Sandman"
//   ],
//   "comics": [
//     "Batman: Year One",
//     "Spider-Man: Blue",
//     "X-Men: Dark Phoenix",
//     "V for Vendetta",
//     "Ms. Marvel"
//   ],
//   "comedy": [
//     "Good Omens",
//     "The Hitchhikers Guide to the Galaxy",
//     "The Princess Bride",
//     "Bossypants",
//     "Whered You Go, Bernadette"
//   ],
//   "adventure": [
//     "The Hobbit",
//     "Treasure Island",
//     "The Count of Monte Cristo",
//     "The Martian",
//     "Life of Pi"
//   ],
//   "magicalRealism": [
//     "One Hundred Years of Solitude",
//     "Midnight's Children",
//     "The House of the Spirits",
//     "Like Water for Chocolate",
//     "Beloved"
//   ],
//   "alternateHistory": [
//     "The Man in the High Castle",
//     "11/22/63",
//     "The Yiddish Policemen's Union",
//     "Fatherland",
//     "The Plot Against America"
//   ],
//   "paranormal": [
//     "The Shining",
//     "The Haunting of Hill House",
//     "Interview with the Vampire",
//     "Mexican Gothic",
//     "The Secret History"
//   ],
//   "fanFiction": [
//     "After",
//     "Fangirl",
//     "The Silver Linings Playbook",
//     "Carry On",
//     "Months by Izzy McCall"
//   ],
//   "sliceOfLife": [
//     "Norwegian Wood",
//     "The Perks of Being a Wallflower",
//     "Eleanor Oliphant Is Completely Fine",
//     "A Man Called Ove",
//     "Normal People"
//   ],
//   "science": [
//     "A Brief History of Time",
//     "The Selfish Gene",
//     "Astrophysics for People in a Hurry",
//     "The Immortal Life of Henrietta Lacks",
//     "Sapiens"
//   ],
//   "technology": [
//     "The Innovators",
//     "Clean Code",
//     "Hooked",
//     "Code",
//     "The Phoenix Project"
//   ],
//   "math": [
//     "Fermat's Enigma",
//     "The Joy of x",
//     "In Pursuit of the Unknown",
//     "How Not to Be Wrong",
//     "The Man Who Knew Infinity"
//   ],
//   "engineering": [
//     "Structures: Or Why Things Don't Fall Down",
//     "To Engineer is Human",
//     "The Design of Everyday Things",
//     "Engineering and the Mind's Eye",
//     "Skunk Works"
//   ],
//   "medical": [
//     "Being Mortal",
//     "The Emperor of All Maladies",
//     "When Breath Becomes Air",
//     "The Man Who Mistook His Wife for a Hat",
//     "Complications"
//   ],
//   "ai_ml": [
//     "Artificial Intelligence: A Guide for Thinking Humans",
//     "Life 3.0",
//     "Superintelligence",
//     "You Look Like a Thing and I Love You",
//     "The Master Algorithm"
//   ],
//   "law": [
//     "The Nine",
//     "Just Mercy",
//     "The Rule of Law",
//     "How to Argue & Win Every Time",
//     "Letters to a Young Lawyer"
//   ],
//   "philosophy": [
//     "Meditations",
//     "Sophie's World",
//     "The Republic",
//     "Thus Spoke Zarathustra",
//     "Critique of Pure Reason"
//   ],
//   "economics": [
//     "Freakonomics",
//     "Capital in the Twenty-First Century",
//     "Thinking, Fast and Slow",
//     "The Undercover Economist",
//     "The Big Short"
//   ],
//   "history": [
//     "Guns, Germs, and Steel",
//     "A People's History of the United States",
//     "The Silk Roads",
//     "Team of Rivals",
//     "SPQR: A History of Ancient Rome"
//   ],
//   "research": [
//     "The Craft of Research",
//     "How to Write a Thesis",
//     "Research Design",
//     "Writing Your Journal Article in Twelve Weeks",
//     "The Literature Review"
//   ],
//   "environment": [
//     "Silent Spring",
//     "The Sixth Extinction",
//     "This Changes Everything",
//     "The Uninhabitable Earth",
//     "Braiding Sweetgrass"
//   ],
//   "psychology": [
//     "Thinking, Fast and Slow",
//     "Mans Search for Meaning",
//     "The Power of Habit",
//     "Influence",
//     "Behave"
//   ],
//   "education": [
//     "Mindset",
//     "The Element",
//     "Pedagogy of the Oppressed",
//     "Educated",
//     "Teaching as a Subversive Activity"
//   ],
//   "drama": [
//     "Death of a Salesman",
//     "A Streetcar Named Desire",
//     "The Crucible",
//     "Long Day's Journey Into Night",
//     "The Glass Menagerie"
//   ],
//   "comingOfAge": [
//     "To Kill a Mockingbird",
//     "The Catcher in the Rye",
//     "Eleanor & Park",
//     "The Outsiders",
//     "Looking for Alaska"
//   ],
//   "memoir": [
//     "Educated",
//     "Becoming",
//     "The Glass Castle",
//     "Born a Crime",
//     "When Breath Becomes Air"
//   ],
//   "biography": [
//     "Steve Jobs",
//     "Alexander Hamilton",
//     "The Wright Brothers",
//     "Einstein: His Life and Universe",
//     "Churchill: A Life"
//   ],
//   "selfHelp": [
//     "Atomic Habits",
//     "The Subtle Art of Not Giving a F*ck",
//     "How to Win Friends and Influence People",
//     "The Power of Now",
//     "You Are a Badass"
//   ],
//   "inspiration": [
//     "The Alchemist",
//     "Tuesdays with Morrie",
//     "Daring Greatly",
//     "Big Magic",
//     "Awaken the Giant Within"
//   ],
//   "relationships": [
//     "Men Are from Mars, Women Are from Venus",
//     "Attached",
//     "Hold Me Tight",
//     "The 5 Love Languages",
//     "Mating in Captivity"
//   ],
//   "mentalHealth": [
//     "Lost Connections",
//     "Reasons to Stay Alive",
//     "The Body Keeps the Score",
//     "Maybe You Should Talk to Someone",
//     "First, We Make the Beast Beautiful"
//   ],
//   "faith": [
//     "The Purpose Driven Life",
//     "Mere Christianity",
//     "The Bhagavad Gita",
//     "The Quran",
//     "Man's Search for Meaning"
//   ],
//   "pictureBooks": [
//     "The Very Hungry Caterpillar",
//     "Goodnight Moon",
//     "Where the Wild Things Are",
//     "The Snowy Day",
//     "Brown Bear, Brown Bear, What Do You See?"
//   ],
//   "earlyReaders": [
//     "Frog and Toad Are Friends",
//     "Amelia Bedelia",
//     "Elephant and Piggie Series",
//     "Little Bear",
//     "Henry and Mudge"
//   ],
//   "youngAdult": [
//     "The Hunger Games",
//     "Divergent",
//     "The Fault in Our Stars",
//     "City of Bones",
//     "Thirteen Reasons Why"
//   ],
//   "middleGrade": [
//     "Percy Jackson & the Olympians",
//     "Wonder",
//     "Holes",
//     "Charlottes Web",
//     "Bridge to Terabithia"
//   ],
//   "kidsFantasy": [
//     "Howl's Moving Castle",
//     "The Spiderwick Chronicles",
//     "Inkheart",
//     "The Chronicles of Narnia",
//     "Fablehaven"
//   ],
//   "activityBooks": [
//     "The Everything Kids Puzzle Book",
//     "Highlights Hidden Pictures",
//     "Brain Games for Kids",
//     "My First Big Book of Mazes",
//     "Logic Puzzles for Clever Kids"
//   ],
//   "moralStories": [
//     "Panchatantra",
//     "Aesops Fables",
//     "Jataka Tales",
//     "Moral Stories for Children",
//     "Stories from Grandma"
//   ],
//   "photography": [
//     "Humans of New York",
//     "The Art of Photography",
//     "Annie Leibovitz: At Work",
//     "Understanding Exposure",
//     "On Photography"
//   ],
//   "art": [
//     "Ways of Seeing",
//     "The Story of Art",
//     "Steal Like an Artist",
//     "Art & Fear",
//     "The Lives of the Artists"
//   ],
//   "poetry": [
//     "Milk and Honey",
//     "The Sun and Her Flowers",
//     "Leaves of Grass",
//     "The Waste Land",
//     "Ariel"
//   ],
//   "calligraphy": [
//     "Modern Calligraphy",
//     "Mastering Copperplate Calligraphy",
//     "The Calligraphers Bible",
//     "Hand Lettering 101",
//     "Creative Lettering and Beyond"
//   ],
//   "music": [
//     "This Is Your Brain on Music",
//     "How Music Works",
//     "Life",
//     "Just Kids",
//     "The Rest Is Noise"
//   ],
//   "design": [
//     "The Design of Everyday Things",
//     "Thinking with Type",
//     "Don't Make Me Think",
//     "Graphic Design: The New Basics",
//     "How to Be a Graphic Designer Without Losing Your Soul"
//   ],
//   "craft": [
//     "The Big-Ass Book of Crafts",
//     "Martha Stewart's Encyclopedia of Crafts",
//     "Craft-a-Day",
//     "The Complete Book of Arts & Crafts",
//     "Crafting with Cat Hair"
//   ],
//   "cookbooks": [
//     "Salt, Fat, Acid, Heat",
//     "The Joy of Cooking",
//     "Plenty",
//     "Indian-ish",
//     "The Flavor Bible"
//   ]
// }

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleBookRecommendation = async (genre) => {
    this.addMessage(`🔎 Searching for ${genre} books...`);

    try {
      const res = await fetch(
        `http://localhost:5050/api/openlibrary/genre/chatbot/${genre}`
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
