import { createStore } from "redux"

const GOT_MESSAGES_FROM_SERVER = 'GOT_MESSAGES_FROM_SERVER';
const SEND_MESSAGE_TO_SERVER = 'SEND_MESSAGE_TO_SERVER';

export const gotMessagesFromServer = messages => ({ type: GOT_MESSAGES_FROM_SERVER, messages });
export const sendMessageToServer = newMessageEntry => ({ type: SEND_MESSAGE_TO_SERVER, newMessageEntry });

const initialState = {
  messages: [],
  newMessageEntry: ''
};

function reducer(prevState = initialState, action) {

  switch (action.type) {
    case GOT_MESSAGES_FROM_SERVER:
      return Object.assign({}, prevState, { messages: prevState.messages.concat(action.message) });
    case SEND_MESSAGE_TO_SERVER:
      return Object.assign({}, prevState, { newMessageEntry: action.newMessageEntry });
    default:
      return prevState;
  }
}


const store = createStore(reducer);
export default store;
