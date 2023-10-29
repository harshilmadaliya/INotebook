import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/noteState';
import Login from './components/Login';
import Signup from './components/Signup';
import Alerts from './components/Alerts';
import { useState } from 'react';

function App() {

  const [alerts, setalerts] = useState(null)
  const showAlerts = (message, type) => {
    setalerts({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalerts(null)
    }, 1500);
  }
  return (
    <>
      <NoteState>

        <Router>
          <Navbar />
          <Alerts alerts={alerts}/>
          <Routes>
            <Route path="/" element={<Home showAlerts={showAlerts} />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/login" element={<Login showAlerts={showAlerts} />} />
            <Route path="/signup" element={<Signup showAlerts={showAlerts} />} />
          </Routes>
          {/* Let’s understand this syntax in */}
        </Router>
      </NoteState>
    </>
  );
}

export default App;
