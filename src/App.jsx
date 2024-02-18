
import React, { useState} from 'react';
import './App.css';
import Flashcardlist from './Flashcardlist';
import flashcardsData from './flashcardsData.json';

function App() {
  const [array, setArray] = useState(0);
  const [totalCards, setTotalCards] = useState(flashcardsData.length);

  const [inputs, setInputs] = useState({
    answer: '',
  });

  const [checkedTemperature, setCheckedTemperature] = useState('');
  const leftBtn = () => {
    setArray((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const rightBtn = () => {
    setArray((prevIndex) => Math.min(flashcardsData.length - 1, prevIndex + 1));
  };

  const onNewDrink = () => {
    setInputs({
      answer: '',
    });
    getNextDrink();
  };

  const onCheckAnswer = () => {
    const trueAnswer = flashcardsData[array].answer;
  
    if (trueAnswer.toLowerCase() !== inputs.answer.toLowerCase()) {
      setCheckedTemperature('wrong');
      alert("That is incorrect!");
    } else {
      setCheckedTemperature('correct');
      alert("That is the Correct answer!");
      
    }
  };
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  return (
    <>

<div className="container">
        <h1>Hello World</h1>
        <p>Click each flashcard to see the answer. Navigate with the arrows.</p>
        <h3>Total Cards: {totalCards}</h3>
        <Flashcardlist flashcards={[flashcardsData[array]]} />

        <input className='input'
          type="text"
          name= "answer"
          value={inputs.answer}
          onChange={handleInputChange}
          placeholder="Input your answer"/>
      </div>
      <button onClick={leftBtn}>Left</button>
      <button onClick={rightBtn}>Right</button>
      <button type="submit" className="submit" onClick={onCheckAnswer}>
        Check Answer
      </button>

      <button type="button" className="button1" onClick={onNewDrink}>
        New Card
      </button>
    </>
  );
}

export default App;