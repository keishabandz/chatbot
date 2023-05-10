import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from "./components/LearningOptions/LearningOptions";
import LearningOptions2 from "./components/LearningOptions/LearningOptions2";
import LearningOptions3 from "./components/LearningOptions/LearningOptions3";
import LinkList from "./components/LinkList/LinkList";

const config = {
  botName: "LearningBot",
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What do you want to know about?", {
      widget: "learningOptions",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "Company Analysis Report",
      widgetFunc: (props) => <LearningOptions2 {...props} />,

    },
    {
          widgetName: "Stock Analysis",
          widgetFunc: (props) => <LearningOptions3 {...props} />,

    },

    {
              widgetName: "How does the Snowflake work?",
              widgetFunc: (props) => <LearningOptions3 {...props} />,

        },

    {
      widgetName: "How does Simply Wall St analyse stocks?",
      widgetFunc: (props) => <LinkList {...props} />,
    props: {
      options: [
        {
          text: "How does Simply Wall St analyse stocks, give me a link",
          url:
            "https://support.simplywall.st/hc/en-us/articles/360001724115-How-does-Simply-Wall-St-analyse-stocks",
          id: 1,
        },

      ],
    },

    },
  ],
};

export default config;
