import React from "react";

import "./LearningOptions.css";

const LearningOptions2 = (props) => {
  const options = [
    {
      text: "Stock Analysis",
      handler: props.actionProvider.handleJavascriptList2,
      id: 1,
    },
    { text: "Financial Data", handler: () => {}, id: 2 },
    { text: "Valuation", handler: () => {}, id: 3 },
    { text: "General", handler: () => {}, id: 4 },
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

export default LearningOptions2;
