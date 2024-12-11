import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Decks from './pages/Decks';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/decks" element={<Decks />} />
    </Routes>
  );
};

export default App;
