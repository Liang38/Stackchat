import React, { Component } from 'react';
import store, { sendMessageToServer, gotNewMessageFromServer } from '../Store';
import axios from 'axios';
import socket from '../socket'

export default class NewMessageEntry extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() =>
      this.setState(store.getState()))
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleChange(evt) {
    const action = sendMessageToServer(evt.target.value);
    store.dispatch(action);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const content = this.state.newMessageEntry
    console.log('this is props', this.props)
    const channelId = this.props.channelId;
    axios.post('/api/messages', { content: content, channelId: channelId })
      .then(res => res.data)
      .then(message => {
        store.dispatch(gotNewMessageFromServer(message));
        socket.emit('new-message', message);
      })
  }
  render() {
    return (
      <form id="new-message-form" onSubmit={this.handleSubmit}>
        <div className="input-group input-group-lg">
          <input
            className="form-control"
            type="text"
            name="content"
            placeholder="Say something nice..."
            onChange={this.handleChange}
            value={this.state.newMessageEntry}
          />
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit">Chat!</button>
          </span>
        </div>
      </form>
    );
  }
}
