import React, { useEffect, useState } from "react";
import "../../Styling/Author_Feedback.css";

const FeedbackCard = ({ bookTitle, reviews }) => {
  return (
    <div className="envelope-card">
      <div className="envelope-header">
        <h4>{bookTitle}</h4>
      </div>
      <div className="feedback-card">
        {reviews.length ? (
          reviews.map((review, idx) => (
            <p key={idx}>
              • <strong>{review.commenterName}:</strong> {review.comment}
            </p>
          ))
        ) : (
          <p className="no-reviews">No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

const Feedback = () => {
  const [feedbackData, setFeedbackData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const res = await fetch("http://localhost:5050/api/feedback", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await res.json();
        if (res.ok) {
          // Group feedbacks by bookTitle
          const grouped = {};
          data.forEach((fb) => {
            if (!grouped[fb.bookTitle]) grouped[fb.bookTitle] = [];
            grouped[fb.bookTitle].push({
              comment: fb.comment,
              commenterName: fb.commenterName,
            });
          });

          // Convert to array of { bookTitle, reviews }
          const structured = Object.entries(grouped).map(
            ([title, reviews]) => ({
              bookTitle: title,
              reviews,
            })
          );

          setFeedbackData(structured);
        } else {
          console.error("Error fetching feedback:", data?.msg || "Unknown");
        }
      } catch (err) {
        console.error("Error fetching feedback:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedback();
  }, []);

  return (
    <div className="feedback-container">
      <h2 className="feedback-heading">📩 Reader Feedback</h2>
      {loading ? (
        <p>Loading feedback...</p>
      ) : (
        <div className="feedback-grid">
          {feedbackData.length ? (
            feedbackData.map((book, index) => (
              <FeedbackCard
                key={index}
                bookTitle={book.bookTitle}
                reviews={book.reviews}
              />
            ))
          ) : (
            <p>No feedback available yet.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Feedback;
