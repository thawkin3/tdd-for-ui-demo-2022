// Validation for first name field only and no styling
import React, { useState } from 'react'
import './RequestForm.css'

export const RequestForm = () => {
  const [firstName, setFirstName] = useState('')
  const [firstNameError, setFirstNameError] = useState('')

  const handleFirstNameChange = e => {
    setFirstName(e.target.value)
  }

  const handleFormSubmit = e => {
    e.preventDefault()

    setFirstNameError(firstName ? '' : 'First Name field is required')
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
        <input id="lastName" />
      </div>
      <div className="formGroup">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
      </div>
      <button type="submit">Request Demo</button>
    </form>
  )
}
