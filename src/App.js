import './App.css';
import Frame from './Screen/Frame';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={"/frame"} element={<Frame />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
