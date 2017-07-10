import { createStore } from "redux"

const GOT_MESSAGES_FROM_SERVER = 'GOT_MESSAGES_FROM_SERVER';

export const gotMessagesFromServer = messages => ({ type: GOT_MESSAGES_FROM_SERVER, messages });

const initialState = {
    messages: []
};

function reducer(prevState = initialState, action) {
    const newState = Object.assign({}, prevState);
    switch (action.type) {
        case "GOT_MESSAGES_FROM_SERVER":
            return { messages: [...prevState, GOT_MESSAGES_FROM_SERVER] };
            break;
        default:
            return prevState;
    }
    return newState;
}
