import { Home } from './pages/Home';
import { Details } from './pages/Details';
import { Routes, Route } from 'react-router-dom';
import './App.scss'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/space-news" element={<Home />} />
        <Route path="/space-news/:id" element={<Details />} />
      </Routes>
    </div>
  )
}

export default App
