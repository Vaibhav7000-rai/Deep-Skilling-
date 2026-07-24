import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('React event examples', () => {
  it('increments the counter and shows the welcome message', async () => {
    const user = userEvent.setup()
    render(<App />)

    expect(screen.getByRole('heading', { name: /counter/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /increment counter/i }))
    expect(screen.getByText(/count: 1/i)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /say hello/i }))
    expect(screen.getByText(/hello, react learner!/i)).toBeInTheDocument()
  })
})
