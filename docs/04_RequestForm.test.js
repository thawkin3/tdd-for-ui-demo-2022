// Validation for all three fields with styling included
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RequestForm } from './RequestForm'

describe('RequestForm', () => {
  it('renders without crashing', () => {
    expect(() => render(<RequestForm />)).not.toThrow()
  })

  it('renders a first name input', () => {
    render(<RequestForm />)
    expect(screen.getByLabelText('First Name')).toBeInTheDocument()
  })

  it('renders a last name input', () => {
    render(<RequestForm />)
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument()
  })

  it('renders an email input', () => {
    render(<RequestForm />)
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it('renders a Request Demo submit button', () => {
    render(<RequestForm />)
    expect(
      screen.getByRole('button', { name: 'Request Demo' })
    ).toBeInTheDocument()
  })

  it('displays an error message for each field if the user submits an empty form', () => {
    render(<RequestForm />)
    userEvent.click(screen.getByRole('button', { name: 'Request Demo' }))

    expect(screen.getByText('First Name field is required')).toBeInTheDocument()
    expect(screen.getByText('Last Name field is required')).toBeInTheDocument()
    expect(screen.getByText('Email field is required')).toBeInTheDocument()
  })
})
