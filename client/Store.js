import { createStore } from "redux"

const GOT_MESSAGES_FROM_SERVER = 'GOT_MESSAGES_FROM_SERVER';

export const gotMessagesFromServer = messages => ({ type: GOT_MESSAGES_FROM_SERVER, messages });

const initialState = {
  messages: []
};

function reducer(prevState = initialState, action) {
  switch (action.type) {
    case GOT_MESSAGES_FROM_SERVER:
      return Object.assign({}, prevState, {
        messages: action.messages
      });
    default:
      return prevState;
  }
}

const store = createStore(reducer);
export default store;
