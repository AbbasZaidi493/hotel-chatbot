import React, { Component } from 'react';
import ChatbotComponent from './chatbot/chatbot.component';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChatbotComponent />
      </div>
    );
  }
}

export default App;
