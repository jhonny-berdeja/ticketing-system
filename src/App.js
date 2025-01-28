import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './home/Home';

function App() {
  return (
    <HashRouter>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  </HashRouter>
  );
}

export default App;
