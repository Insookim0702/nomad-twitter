import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Auth from '../routes/Auth'
import Home from '../routes/Home'
import Profile from '../routes/Profile'

export default function AppRouter ({ isLoggedIn }) {
  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/profile' element={<Profile />}></Route>
          </>
        ) : (
          <Route exact path='/' element={<Auth />}></Route>
        )}
      </Routes>
    </Router>
  )
}
