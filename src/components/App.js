import { useState } from 'react'
import { authService } from '../fbase'
import AppRouter from './Router'
import '../assets/init.css'
function App () {
  console.log(authService.currentUser)
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser)
  return (
    <div className='App'>
      <AppRouter isLoggedIn={isLoggedIn} />
    </div>
  )
}

export default App
