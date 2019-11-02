import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import questions from "./questions";
import Choice from "./Choice";

const Question = props => {
  const { prompt, choices } = props;
  const [selectedChoice, setSelectedChoice] = React.useState(null);
  return (
    <div>
      <h2>{prompt}</h2>
      {choices.map(choiceProps => (
        <Choice
          imgSrc={choiceProps.imgSrc}
          alt={choiceProps.alt}
          id={choiceProps.id}
          handleClick={setSelectedChoice}
          isSelected={choiceProps.id === selectedChoice}
        />
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      {questions.map(questionProps => (
        <Question
          prompt={questionProps.prompt}
          choices={questionProps.choices}
        />
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
