import { createStore, applyMiddleware } from "redux"
import loggerMiddleware from 'redux-logger'

const middleware = applyMiddleware(loggerMiddleware);
const GOT_MESSAGES_FROM_SERVER = 'GOT_MESSAGES_FROM_SERVER';
const SEND_MESSAGE_TO_SERVER = 'SEND_MESSAGE_TO_SERVER';
const GOT_NEW_MESSAGES_FROM_SERVER = 'GOT_NEW_MESSAGES_FROM_SERVER';

export const gotMessagesFromServer = messages => ({ type: GOT_MESSAGES_FROM_SERVER, messages });
export const sendMessageToServer = newMessageEntry => ({ type: SEND_MESSAGE_TO_SERVER, newMessageEntry });
export const gotNewMessageFromServer = message => ({ type: GOT_NEW_MESSAGES_FROM_SERVER, message })

const initialState = {
    messages: [],
    newMessageEntry: ''
};

function reducer(prevState = initialState, action) {
    let newState = Object.assign({}, prevState)
    switch (action.type) {
        case GOT_MESSAGES_FROM_SERVER:
            newState.messages = action.messages
            break;
        case SEND_MESSAGE_TO_SERVER:
            newState.newMessageEntry = action.newMessageEntry
            break;
        case GOT_NEW_MESSAGES_FROM_SERVER:
            newState.messages = newState.messages.concat(action.message)
            console.log("newState", newState.messages)
            break;
        default:
            break;
    }
    return newState
}


const store = createStore(reducer, middleware);

export default store;
