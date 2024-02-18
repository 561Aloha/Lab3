import React from "react";
import './answerBox.css';


const RecipeChoices = ({ handleChange, label, choices, checked }) => {
  return (
    <div className="radio-buttons">
      {choices &&
      choices.map((choice) => (<li key={choice}>{choice} </li>))}
    </div>
  );
};

export default RecipeChoices;
