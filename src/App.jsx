import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Connexion from './pages/connexion'
import Todo from './components/todo'
import TacheListe from './components/tache'
import { Inscription } from './pages/inscription'
import Reinitial from './pages/reinitiel'
import Dashboard from './pages/dashboard'
import Accueil from './pages/accueil'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Accueil/>} />
      <Route path='/connexion' element={<Connexion/>} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/tacheListe' element={<TacheListe/>} />
      <Route path='/inscription' element={<Inscription/>} />
      <Route path='/reinitial' element={<Reinitial/>} />
      <Route path='/todo' element={<Todo/>} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
