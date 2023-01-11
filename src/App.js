import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

//Pages
import Home from './pages/Home';
import Log from './pages/Log';
import Dashboard from './pages/Dashboard';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/log" element={<Log />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
