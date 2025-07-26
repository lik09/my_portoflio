import React, { useState, useEffect } from 'react';
import './TypingHeader.css'; // for cursor blink

const TypingHeader = ({ text = "I'm Nhorn Lik", speed = 100, pause = 1000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        console.log("show: ",text.length);
        if (index < text.length) {
          setDisplayedText(text.substring(0, index + 1));
          setIndex(prev => prev + 1);
        } else {
          // Wait, then start deleting
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        // Deleting
        if (index > 0) {
          setDisplayedText(text.substring(0, index - 1));
          setIndex(prev => prev - 1);
        } else {
          // Restart typing
          setIsDeleting(false);
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, speed, pause, index, isDeleting]);

  return (
    <h1>
      Hi, I'm {displayedText}
      <span className="cursor">|</span>
    </h1>
  );
};

export default TypingHeader;
