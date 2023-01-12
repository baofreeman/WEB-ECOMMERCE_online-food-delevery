import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { publicRouters } from '../../lilies-food-place/src/routes';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRouters.map((route, index) => {
                        let Page = route.component;
                        return <Route key={index} path={route.path} element={<Page />} />;
                    })}
                    <Route />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
