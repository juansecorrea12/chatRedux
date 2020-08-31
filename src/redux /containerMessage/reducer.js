const INITIAL_STATE = {
  messages: [],
  inputMessage: "",
};

const calculateId = (length) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const messageReducer = (previousState = INITIAL_STATE, action) => {
  let messages = [];
  switch (action.type) {
    case "SET_INPUT_VALUE":
      return { ...previousState, inputMessage: action.payload };
    case "SEND_MESSAGE":
      let message = {
        id: calculateId(5),
        content: previousState.inputMessage,
        date: new Date(),
        showOptions: false,
      };
      return {
        ...previousState,
        messages: [...previousState.messages, message],
      };
    case "DELETE_MESSAGE":
      messages = [...previousState.messages];
      messages.splice(action.payload, 1);
      return { ...previousState, messages: messages };
    case "SHOW_OPTIONS":
      messages = [...previousState.messages];
      console.log(messages[action.payload]);
      messages[action.payload].showOptions = !messages[action.payload]
        .showOptions;
      return { ...previousState, messages: messages };
    default:
      return previousState;
  }
};
