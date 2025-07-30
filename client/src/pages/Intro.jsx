// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import ReactPlayer from 'react-player/youtube';
// import '../Styling/Intro.css';

// const IntroScreen = ({ onComplete }) => {
//   const [showWelcome, setShowWelcome] = useState(false);

//   const handleProgress = (state) => {
//     if (state.playedSeconds >= 3) {
//       setShowWelcome(true);
//       if (onComplete) onComplete();
//     }
//   };

//   const navigate = useNavigate();

//   const handleEnter = () => {
//     navigate('/Enter');
//   };


//   return (
//     <div className="intro-container">
//       {!showWelcome ? (
//         <ReactPlayer
//           url="https://youtu.be/cy4XcNmul1g?si=e_DMkkQEyag1jC7e"
//           playing={true}
//           controls={false}
//           width="100vw"
//           height="100vh"
//           onProgress={handleProgress}
//           style={{ position: 'absolute', top: 0, left: 0 }}
//           config={{
//             youtube: {
//               playerVars: {
//                 autoplay: 1,
//                 modestbranding: 1,
//                 showinfo: 0,
//                 rel: 0,
//                 controls: 0
//               }
//             }
//           }}
//         />
//       ) : (
//         <div className="welcome-overlay">
//           <h1>📚 Welcome to Our Virtual Library!</h1>
//           <p>🛫 Get ready to dive into the depths of our Book World!!<br />🎟️ Here’s your ticket to VirLib</p>
//           <button type="submit" className="btn" onClick={handleEnter}>Let's Go</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default IntroScreen;
