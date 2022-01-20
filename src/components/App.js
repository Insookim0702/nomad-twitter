import { useState } from 'react'
import firebase from '../firebase'
import AppRouter from './Router'
import '../assets/init.css'
function App () {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className='App'>
      <AppRouter isLoggedIn={isLoggedIn} />
    </div>
  )
}

export default App
