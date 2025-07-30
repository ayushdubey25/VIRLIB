// // src/pages/Library.jsx
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Library = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/fetch-archive-books')
//       .then(res => setBooks(res.data))
//       .catch(err => console.error("Error fetching books:", err));
//   }, []);

//   return (
//     <div>
//       <h1>📚 Library</h1>
//       <div>
//         {books.map((book, idx) => (
//           <div key={idx} style={{ margin: "10px", border: "1px solid #ccc", padding: "10px" }}>
//             <img src={book.cover} alt={book.title} height={150} /><br />
//             <strong>{book.title}</strong><br />
//             <em>{book.authors}</em><br />
//             <a href={book.link} target="_blank" rel="noopener noreferrer">Read</a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Library;
