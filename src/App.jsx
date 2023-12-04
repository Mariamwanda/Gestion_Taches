import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Connexion from './pages/connexion'
import Dashboard from './pages/dashbord'
import TacheListe from './components/tache'
import { Inscription } from './pages/inscription'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Connexion/>} />
      
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/tacheListe' element={<TacheListe/>} />
      <Route path='/inscription' element={<Inscription/>} />
      
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
