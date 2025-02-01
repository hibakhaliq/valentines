"use client"

import { useState } from "react";
import { motion } from "framer-motion";

export default function ValentinePopup() {
  const [popupIndex, setPopupIndex] = useState(0);
  const messages = [
    "Are you sure? 💔",
    "We would look great together! ",
    "Are you 100% sure?",
    "I will buy you hotpot",
    "But...you only yap with me </3",
    "But... I love you! ❤️",
    "You are going to be my Valentine!😘",
  ];
  const [showPopup, setShowPopup] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleNoClick = () => {
    if (popupIndex < messages.length - 1) {
      setPopupIndex(popupIndex + 1);
    } else {
      setPopupIndex(0);
    }
    setShowPopup(true);
  };

  const handleYesClick = () => {
    setShowVideo(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-500 text-center">
      {!showVideo ? (
        <div className="p-6 bg-white shadow-xl rounded-2xl max-w-md text-center">
          <h1 className="text-3xl font-bold mb-4">Will you be my Valentine? 💖</h1>
          <div className="flex justify-center gap-6 mt-4">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              onClick={handleYesClick}
            >
              Yes! 💕
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              onClick={handleNoClick}
            >
              No 💔
            </button>
          </div>
        </div>
      ) : (
        <video className="w-full max-w-2xl rounded-lg shadow-xl" controls autoPlay>
          <source src="/hugs.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {showPopup && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="bg-white p-6 rounded-lg shadow-xl text-center">
            <p className="text-xl font-semibold">{messages[popupIndex]}</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
