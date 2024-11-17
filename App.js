import React, { useState } from 'react';
import { PartyAgent } from './partyAgent';

function App() {
  const [game, setGame] = useState('');
  const [event, setEvent] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const handleSubmit = async () => {
    const output = await PartyAgent.actions.getRecommendations({ game, event });
    setRecommendations(output);
  };

  return (
    <div className="App">
      <h1>Game-Themed Party Planner</h1>
      <label>
        Select Game:
        <select value={game} onChange={(e) => setGame(e.target.value)}>
          <option value="">Choose...</option>
          <option value="Mario">Mario</option>
          <option value="Fortnite">Fortnite</option>
          <option value="Halo">Halo</option>
        </select>
      </label>
      <br />
      <label>
        Select Event:
        <select value={event} onChange={(e) => setEvent(e.target.value)}>
          <option value="">Choose...</option>
          <option value="Birthday">Birthday</option>
          <option value="Hangout">Hangout</option>
        </select>
      </label>
      <br />
      <button onClick={handleSubmit}>Get Recommendations</button>
      <h2>Recommendations:</h2>
      <ul>
        {recommendations.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
