// Final state with confirmation page
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

  it('replaces the form with a confirmation message when the form is submitted successfully', () => {
    render(<RequestForm />)

    userEvent.type(screen.getByLabelText('First Name'), 'Tyler')
    userEvent.type(screen.getByLabelText('Last Name'), 'Hawkins')
    userEvent.type(screen.getByLabelText('Email'), 'test@test.com')
    userEvent.click(screen.getByRole('button', { name: 'Request Demo' }))

    expect(screen.queryByRole('form')).not.toBeInTheDocument()
    expect(
      screen.getByText('Thank you! We will be in touch with you shortly.')
    ).toBeInTheDocument()
  })
})
