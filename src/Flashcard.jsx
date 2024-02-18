import React, { useState } from 'react';
import './Flashcard.css';

function Flashcard({ card }) {
    const [flip, setFlip] = useState(true);
    const handleCardClick = (event) => {
        setFlip(!flip);
        event.target.style.right = '0px';
  };

  return (
    <div className='card' onClick={handleCardClick}>
      {flip ? (
        <div className='front'>
          <div className='question'>{card.question}</div>
        </div>
      ) : (
        <div className='answer'>{card.answer}</div>
      )}
    </div>
  );
}

export default Flashcard;