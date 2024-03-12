
import './App.css';
import {Authui} from "./components/authui"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Dashboard} from './components/dashboard.js';
import {Prime } from './components/prime.js';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
<Route path='/' element={<Prime/>}/>
          <Route path='/auth' element={<Authui/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
