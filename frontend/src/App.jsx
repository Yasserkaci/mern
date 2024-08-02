import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { authContext } from '../context/authContext'
// pages & components
import Home from './pages/Home'
import Login from './pages/login'
import Signup from './pages/signup'
import Navbar from './components/NavBar'
import './App.css'
import './style.css'

function App() {

  const{ user, sipatch} = useContext(authContext)



  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={user ? <Home />: <Navigate to='/login'/>}
            />
            <Route 
              path="/login" 
              element={!user ? <Login />:<Navigate to="/" />} 
            />
            <Route 
              path="/signup" 
              element={ !user ?<Signup />:<Navigate to="/" />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;