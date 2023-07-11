import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Home from './Home';
import Rules from './components/Rules';
import Game from './components/Game';
const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
        <Routes>
            <Route path="/rules" element={<Rules/>}/>
        </Routes>
        <Routes>
            <Route path="/Computer-vs-Human" element={<Game isAI='True'/>}/>
        </Routes>
        <Routes>
            <Route path="/Human-vs-Human" element={<Game isAI='False'/>}/>
        </Routes>
    </Router>
  )
}

export default App
