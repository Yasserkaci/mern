import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import NavBar  from "./components/NavBar"
import "./App.css"

function App() {

  return (
    <>
      <div className="app">
        <BrowserRouter>
        <NavBar/>
        <div className="pages">
          <Routes>
            <Route path="/"  element={<Home/>} />
          </Routes>
        </div>
        </BrowserRouter>
      </div>
        
    </>
  )
}

export default App
