'use client'

import { useState, useEffect } from 'react';

const AlphabetGame = () => {
  const [currentLetter, setCurrentLetter] = useState('A');
  const [remainingTime, setRemainingTime] = useState(120); // 2 minutes
  const [gameStatus, setGameStatus] = useState('Playing');

  // Function to handle key press
  const handleKeyPress = (event:any) => {
    const pressedKey = event.key.toUpperCase();
    if (pressedKey === currentLetter) {
      if (currentLetter === 'Z') {
        setGameStatus('Success');
      } else {
        setCurrentLetter(String.fromCharCode(currentLetter.charCodeAt(0) + 1));
      }
    }
  };

  // Function to update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Check if time is up
  useEffect(() => {
    if (remainingTime === 0) {
      setGameStatus('Time Up');
    }
  }, [remainingTime]);

  // Event listener to capture key presses
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentLetter]); // Only re-add event listener when currentLetter changes

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Alphabet Game</h1>
      <p>Press the letter: {currentLetter}</p>
      <p>Time remaining: {Math.floor(remainingTime / 60)}:{remainingTime % 60 < 10 ? '0' : ''}{remainingTime % 60}</p>
      {gameStatus === 'Success' && <p>Congratulations! You pressed all alphabets successfully.</p>}
      {gameStatus === 'Time Up' && <p>Time's up! Try again.</p>}
      <p>Game Status: {gameStatus}</p>
    </div>
  );
};

export default AlphabetGame;

