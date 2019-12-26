import React from 'react';
import UserList from './components/UserList';
import MessageList from './components/MessageList';
import SendMessageForm from './forms/SendMessageForm';
import Button from 'rsuite/lib/Button';
import './App.css';
import 'rsuite/dist/styles/rsuite-default.css'; // or 'rsuite/dist/styles/rsuite-default.css'


function App() {
  return (
    <div className="App">
      <Button>Hello Worldd</Button>
      <UserList />
      <MessageList />
      <SendMessageForm/>
    </div>
  );
}

export default App;
