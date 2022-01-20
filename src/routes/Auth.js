import { authService } from 'fbase'
import React, { useState } from 'react'
export default function Auth () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isNewAccount, setIsNewAccount] = useState(true)
  function onChange (event) {
    const { value, name } = event.target
    if (name === 'email') {
      setEmail(value)
    } else {
      setPassword(value)
    }
  }

  async function onSubmit (event) {
    event.preventDefault()
    console.log(email, password)
    if (isNewAccount) {
      // create account
      await authService.createUserWithEmailAndPassword(email, password)
    } else {
      // login
      await authService.signInWithEmailAndPassword(email, password)
    }
  }
  return (
    <>
      <div>Auth</div>
      <form onSubmit={onSubmit}>
        <input
          name='email'
          type='email'
          placeholder='email'
          value={email}
          onChange={onChange}
        />
        <input
          name='password'
          type='password'
          placeholder='password'
          value={password}
          onChange={onChange}
        />
        <input
          type='submit'
          value={isNewAccount ? 'Create Account' : 'Log In'}
        />
      </form>
    </>
  )
}
