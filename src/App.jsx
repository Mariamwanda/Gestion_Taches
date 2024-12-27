import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Essaie from './components/essaie.jsx';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Essaie/>} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
