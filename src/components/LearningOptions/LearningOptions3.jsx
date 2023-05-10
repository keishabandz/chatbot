import React from "react";

import "./LearningOptions.css";

const LearningOptions3 = (props) => {
  const options = [
    {
      text: "How does Simply Wall St analyse stocks?",
      handler: props.actionProvider.handleJavascriptList3,
      id: 1,
    },
    { text: "How does the Snowflake work?", handler: props.actionProvider.handleJavascriptList4, id: 2 },
    { text: "How scores are plotted in the Snowflake?", handler: () => {}, id: 3 },
    { text: "How do I read the 'Upcoming Dividend Payment' infograph?", handler: () => {}, id: 4 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions3;
