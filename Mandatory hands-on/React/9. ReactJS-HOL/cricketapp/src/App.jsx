import { useState } from 'react'
import './App.css'

function ListofPlayers() {
  const players = [
    { name: 'Rohit Sharma', score: 85 },
    { name: 'Virat Kohli', score: 74 },
    { name: 'Shubman Gill', score: 66 },
    { name: 'Hardik Pandya', score: 58 },
    { name: 'Jasprit Bumrah', score: 92 },
    { name: 'KL Rahul', score: 69 },
    { name: 'Rishabh Pant', score: 81 },
    { name: 'Yuzvendra Chahal', score: 63 },
    { name: 'Suryakumar Yadav', score: 77 },
    { name: 'Mohammed Siraj', score: 57 },
    { name: 'Shreyas Iyer', score: 71 },
  ]

  const playerList = players.map((player) => (
    <li key={player.name}>
      <strong>{player.name}</strong> - Score: {player.score}
    </li>
  ))

  const lowScorers = players
    .filter((player) => player.score < 70)
    .map((player) => (
      <li key={player.name}>
        {player.name} ({player.score})
      </li>
    ))

  return (
    <section className="card">
      <h2>List of Players</h2>
      <p>Using ES6 <code>map()</code> to display all players.</p>
      <ul>{playerList}</ul>
      <h3>Players with score below 70</h3>
      <ul>{lowScorers}</ul>
    </section>
  )
}

function IndianPlayers() {
  const T20players = ['Rohit Sharma', 'Virat Kohli', 'Hardik Pandya']
  const RanjiTrophyPlayers = ['Shubman Gill', 'Cheteshwar Pujara', 'Ravindra Jadeja']
  const allPlayers = [...T20players, ...RanjiTrophyPlayers]

  const [oddTeamPlayer, ...otherOddPlayers] = T20players
  const [evenTeamPlayer, ...otherEvenPlayers] = RanjiTrophyPlayers

  return (
    <section className="card">
      <h2>Indian Players</h2>
      <p>Using ES6 destructuring and array merge.</p>
      <div className="player-grid">
        <div>
          <h3>Odd Team Player</h3>
          <p>{oddTeamPlayer}</p>
          <p>Other odd team players: {otherOddPlayers.join(', ')}</p>
        </div>
        <div>
          <h3>Even Team Player</h3>
          <p>{evenTeamPlayer}</p>
          <p>Other even team players: {otherEvenPlayers.join(', ')}</p>
        </div>
      </div>
      <h3>Merged Player List</h3>
      <ul>{allPlayers.map((player) => <li key={player}>{player}</li>)}</ul>
    </section>
  )
}

function App() {
  const [flag, setFlag] = useState(true)

  let view
  if (flag) {
    view = <ListofPlayers />
  } else {
    view = <IndianPlayers />
  }

  return (
    <main className="app-shell">
      <header>
        <h1>Cricket App</h1>
        <p>React hands-on lab using ES6 features.</p>
        <button type="button" onClick={() => setFlag(!flag)}>
          {flag ? 'Show Indian Players' : 'Show Player List'}
        </button>
      </header>
      {view}
    </main>
  )
}

export default App
