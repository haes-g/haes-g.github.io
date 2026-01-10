import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Overview from './pages/Overview';
import History from './pages/History'

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/overview" element={<Overview />} />
    <Route path="/history" element={<History />} />
  </Routes>
);

export default App;