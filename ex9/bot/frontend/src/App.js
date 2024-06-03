import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/analyze', { message });
      setResponse(res.data.response);
    } catch (error) {
      console.error('Error:', error);
      setResponse('Error analyzing message');
    }
  };

  return (
    <div className="App">
      <h1>DiscordBot Frontend</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your message:
          <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
        <button type="submit">Analyze</button>
      </form>
      {response && <div>Response: {response}</div>}
    </div>
  );
}

export default App;
