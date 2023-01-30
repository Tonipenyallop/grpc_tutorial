import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { ChatServiceClient } from './proto/ChatPackageServiceClientPb';
import { ChatInitiateRequest } from './proto/chatPackage_pb';

function App() {
  useEffect(() => {
    (async () => {
      const client = new ChatServiceClient('http://localhost:8080');
      const req = new ChatInitiateRequest();
      req.setUsername('Taesu');
      req.setAvatarUrl('tmpURL');
      const res = client
        .chatInitiate(req, {})
        .catch(err => console.error({ err }));
    })();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
