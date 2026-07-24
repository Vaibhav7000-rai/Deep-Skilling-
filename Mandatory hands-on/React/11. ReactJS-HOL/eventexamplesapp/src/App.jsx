import React, { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('')
  const [rupees, setRupees] = useState('')
  const [euroValue, setEuroValue] = useState('')

  const incrementCount = () => {
    setCount((current) => current + 1)
  }

  const decrementCount = () => {
    setCount((current) => current - 1)
  }

  const sayHello = (name) => {
    setMessage(`Hello, ${name}!`)
  }

  const handleSyntheticEvent = (event) => {
    alert(`Synthetic event triggered: ${event.type}`)
  }

  const convertToEuro = (event) => {
    event.preventDefault()
    const amount = Number(rupees)
    if (!Number.isNaN(amount) && amount >= 0) {
      const euro = (amount / 90).toFixed(2)
      setEuroValue(`${amount} INR = ${euro} EUR`)
    } else {
      setEuroValue('Enter a valid rupee amount')
    }
  }

  return (
    <main className="app-shell">
      <section className="hero-card">
        <h1>React Event Handling Lab</h1>
        <p>Explore event handlers, synthetic events, and this-style class methods in a simple demo.</p>
      </section>

      <section className="demo-grid">
        <article className="demo-card">
          <h2>Counter</h2>
          <p className="value">Count: {count}</p>
          <div className="button-row">
            <button type="button" onClick={incrementCount}>
              Increment Counter
            </button>
            <button type="button" onClick={decrementCount}>
              Decrement Counter
            </button>
          </div>
        </article>

        <article className="demo-card">
          <h2>Event Handler with Parameters</h2>
          <button type="button" onClick={() => sayHello('React Learner')}>
            Say Hello
          </button>
          <p className="message">{message}</p>
        </article>

        <article className="demo-card">
          <h2>Synthetic Event Example</h2>
          <button type="button" onClick={handleSyntheticEvent}>
            Trigger Synthetic Event
          </button>
        </article>

        <article className="demo-card">
          <h2>Rupees to Euro Converter</h2>
          <form onSubmit={convertToEuro} className="converter-form">
            <label htmlFor="rupees">INR amount</label>
            <input
              id="rupees"
              type="number"
              value={rupees}
              onChange={(event) => setRupees(event.target.value)}
              placeholder="Enter amount"
            />
            <button type="submit">Convert</button>
          </form>
          <p className="message">{euroValue}</p>
        </article>
      </section>
    </main>
  )
}

export default App
