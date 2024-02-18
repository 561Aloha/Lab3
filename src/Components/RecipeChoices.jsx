import React from "react";
import './answerBox.css';


const RecipeChoices = ({ handleChange, label, choices, checked }) => {
  return (
    <div className="radio-buttons">
      {choices &&
        choices.map((choice) => (
          <li key={choice}>
            <input
              id={choice}
              value={choice}
              name={label}
              type="radio"
              onChange={handleChange}
              checked={Array.isArray(checked) ? checked.includes(choice) : checked === choice}
            />
            {choice}
          </li>
        ))}
    </div>
  );
};

export default RecipeChoices;
