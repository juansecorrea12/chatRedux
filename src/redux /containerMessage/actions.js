export const sendMessage = () => ({
  type: "SEND_MESSAGE",
});

export const deleteMessage = (index) => ({
  type: "DELETE_MESSAGE",
  payload: index,
});

export const setInputValue = (text) => ({
  type: "SET_INPUT_VALUE",
  payload: text,
});

export const showOptions = (id) => ({
  type: "SHOW_OPTINOS",
  payload: id,
});
