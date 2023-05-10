// MessageParser starter code in MessageParser.js
class MessageParser {



  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }



  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    const substrings = ['hello', 'hi', 'hey'];

      const includesAllSubstrings = substrings.some(substring =>
        lowerCaseMessage.includes(substring)
      );

    if (includesAllSubstrings) {
      this.actionProvider.greet();
    }

    if (lowerCaseMessage.includes("javascript")) {
      this.actionProvider.handleJavascriptList();
    }
  }
}

export default MessageParser;
