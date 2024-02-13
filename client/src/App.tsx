import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import useLocalStorage from './useLocalStorage';

type Thread = {
  id: string;
}
type Message = {
  id: string;
  dir: 'in' | 'out';
  threadId: string;
  text: string;
}

function App() {
  const [threads, setThreads] = useLocalStorage<Thread[]>('threads', []);
  const [currentThread, setCurrentThread] = useState<string | null>(null);

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  const openThread = (id: string) => {
    setCurrentThread(id);
  }

  const sendMessage = () => {
    if (!currentThread) {
      return;
    }
    // send message
  }

  return (
    <div>
      <div className='threads'>
        <div>
          {threads.map((thread) => <div key={thread.id} onClick={() => openThread(thread.id)}>{thread.id}</div>)}
        </div>
        <button type='button'>New Thread</button>
      </div>

      <div className='chat'>
        <div className='chat-header'>
          <h2>{currentThread}</h2>
        </div>
        <div className='chat-messages'>
          <div className='message'>Hello</div>
          <div className='message'>Hi</div>
        </div>
        <div className='chat-input'>
          <input type='text' value={message} onChange={(e) => setMessage(e.target.value)}/>
          <button type='button' onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
