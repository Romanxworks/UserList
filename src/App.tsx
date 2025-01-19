import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import User from './pages/User/User';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="user/:id" element={<User />} />
    </Routes>
  )
}

export default App
