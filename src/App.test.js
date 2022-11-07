import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the page header', () => {
    render(<App />)
    expect(screen.getByText('TDD for Building UIs Demo')).toBeInTheDocument()
  })
})
