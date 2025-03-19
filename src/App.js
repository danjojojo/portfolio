import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Wrapper from './components/wrapper/wrapper';
import Pages from './pages/pages';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path="/" element={<Wrapper />} />
        <Route path="*" element={<Pages.NotFound/>} />
      </Routes> 
      </div>
    </Router>
  );
}

export default App;
