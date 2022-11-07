// Validation for all three fields but no styling yet
import React, { useState } from 'react'
import './RequestForm.css'

export const RequestForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const [firstNameError, setFirstNameError] = useState('')
  const [lastNameError, setLastNameError] = useState('')
  const [emailError, setEmailError] = useState('')

  const handleFirstNameChange = e => {
    setFirstName(e.target.value)
  }

  const handleLastNameChange = e => {
    setLastName(e.target.value)
  }

  const handleEmailChange = e => {
    setEmail(e.target.value)
  }

  const handleFormSubmit = e => {
    e.preventDefault()

    setFirstNameError(firstName ? '' : 'First Name field is required')
    setLastNameError(lastName ? '' : 'Last Name field is required')
    setEmailError(email ? '' : 'Email field is required')
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="formGroup">
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </div>
      {firstNameError && <p>{firstNameError}</p>}
      <div className="formGroup">
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" value={lastName} onChange={handleLastNameChange} />
      </div>
      {lastNameError && <p>{lastNameError}</p>}
      <div className="formGroup">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      {emailError && <p>{emailError}</p>}
      <button type="submit">Request Demo</button>
    </form>
  )
}
