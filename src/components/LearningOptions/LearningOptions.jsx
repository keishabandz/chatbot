import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    {
      text: "Company Analysis Report",
      handler: props.actionProvider.handleJavascriptList,
      id: 1,
    },
    { text: "Watchlist & Portfolios", handler: () => {}, id: 2 },
    { text: "Stock Screener", handler: () => {}, id: 3 },
    { text: "Billing & Account", handler: () => {}, id: 4 },
    { text: "Troubleshooting", handler: () => {}, id: 5 },
    { text: "Contacts", handler: () => {}, id: 6 },
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

export default LearningOptions;
