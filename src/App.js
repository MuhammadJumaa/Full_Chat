import React from 'react';
import UserList from './components/UserList';
import MessageList from './components/MessageList';
import './App.css';
import 'rsuite/dist/styles/rsuite-default.css'; // or 'rsuite/dist/styles/rsuite-default.css'


function App() {
  return (
    <div className="App">
      <main>
        <UserList />
        <MessageList />
      </main>
    </div>
  );
}

export default App;
