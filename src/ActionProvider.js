class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  // new method
  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, friend.");
    this.updateChatbotState(greetingMessage);
  }

  handleJavascriptList = () => {
    const message = this.createChatBotMessage(
      "Ok, which section of Company Analysis Report do you want information on?",
      {
        widget: "Company Analysis Report",
      }
    );

    this.updateChatbotState(message);
  };

  handleJavascriptList2 = () => {
      const message = this.createChatBotMessage(
        "Fantastic, what do you want to know about?",
        {
          widget: "Stock Analysis",
        }
      );

      this.updateChatbotState(message);
    };

    handleJavascriptList3 = () => {
          const message = this.createChatBotMessage(
            "Here is an online resource for you that can help:",
            {
              widget: "How does Simply Wall St analyse stocks?",
            }
          );

          this.updateChatbotState(message);
        };
        handleJavascriptList4 = () => {
                  const message = this.createChatBotMessage(
                    "Here is an online resource for you that can help:",
                    {
                      widget: "How does Simply Wall St analyse stocks?",
                    }
                  );

                  this.updateChatbotState(message);
                };

  updateChatbotState(message) {
    // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
