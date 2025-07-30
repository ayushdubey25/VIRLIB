import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Welcome from "./pages/Welcome";
import Enter from "./pages/Enter";
import LibraryShelves from "./pages/Library_shelves";
import Author from "./pages/Author_Details/Author";
import ChatbotWrapper from "./pages/chatbot/chatBotWrapper";
import About from "./pages/About";
import Help from "./pages/Help";
import GenrePage from "./pages/GenrePage";
import AdminLogin from "./pages/AdminLogin";
import ReaderLogin from "./pages/ReaderLogin";
import AuthorLogin from "./pages/AuthorLogin";
import ReaderRegister from "./pages/ReaderRegister";
import AuthorRegister from "./pages/AuthorRegister";
import Contact from "./pages/Contact";
import BookRequest from "./pages/BookRequest";
import RecommendedBooks from "./pages/RecommendedBooks";
import ForgotPasswordLogin from "./pages/ForgotPasswordLogin";

function App() {
  const [user, setUser] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);

      // Force redirect if unauthenticated user tries to access protected routes directly
      const protectedRoutes = [
        "/shelves",
        "/about",
        "/help",
        "/recommended",
        "/contact",
        "/bookrequest",
      ];
      if (protectedRoutes.includes(window.location.pathname)) {
        window.location.replace("/enter");
      }
    }

    // Prevent browser back navigation to protected pages after logout
    const handlePopState = () => {
      const stillLoggedIn = localStorage.getItem("user");
      if (!stillLoggedIn) {
        window.location.replace("/enter");
      }
    };

    window.addEventListener("popstate", handlePopState);
    setCheckingAuth(false);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const isLoggedIn = !!user?.id;

  if (checkingAuth) return <p>Loading...</p>;

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Welcome />} />
        <Route path="/enter" element={<Enter />} />
        <Route path="/authorregister" element={<AuthorRegister />} />
        <Route path="/readerregister" element={<ReaderRegister />} />
        <Route
          path="/readerlogin"
          element={<ReaderLogin setUser={setUser} />}
        />
        <Route path="/authorlogin" element={<AuthorLogin />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bookrequest" element={<BookRequest />} />
        <Route
          path="/forgot-password"
          element={<ForgotPasswordLogin setUser={setUser} />}
        />

        {/* Protected Routes */}
        <Route
          path="/shelves"
          element={
            isLoggedIn ? <LibraryShelves /> : <Navigate to="/enter" replace />
          }
        />
        <Route
          path="/author/:id"
          element={isLoggedIn ? <Author /> : <Navigate to="/enter" replace />}
        />
        <Route
          path="/genre/:genreId"
          element={
            isLoggedIn ? <GenrePage /> : <Navigate to="/enter" replace />
          }
        />
        <Route
          path="/about"
          element={isLoggedIn ? <About /> : <Navigate to="/enter" replace />}
        />
        <Route
          path="/help"
          element={isLoggedIn ? <Help /> : <Navigate to="/enter" replace />}
        />
        <Route
          path="/contact"
          element={isLoggedIn ? <Contact /> : <Navigate to="/enter" replace />}
        />
        <Route
          path="/recommended"
          element={
            isLoggedIn ? <RecommendedBooks /> : <Navigate to="/enter" replace />
          }
        />
        <Route
          path="/bookrequest"
          element={
            isLoggedIn ? <BookRequest /> : <Navigate to="/enter" replace />
          }
        />
        <Route
          path="/forgot-password"
          element={
            isLoggedIn ? (
              <ForgotPasswordLogin />
            ) : (
              <Navigate to="/enter" replace />
            )
          }
        />
      </Routes>

      <ChatbotWrapper />
    </Router>
  );
}

export default App;
