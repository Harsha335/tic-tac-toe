import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Home from './Home';
import Rules from './components/Rules';
import Game from './components/Game';
import Popup from './components/Popup';
const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/rules" element={<Rules/>}/>
            <Route path="/Computer-vs-Human" element={<Game isAI='True'/>}/>
            <Route path="/Human-vs-Human" element={<Game isAI='False'/>}/>
            <Route path="/input/:type" element={<Popup/>}/>
        </Routes>
    </Router>
  )
}

export default App
