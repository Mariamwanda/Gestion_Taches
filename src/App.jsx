import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import TacheListe from './components/tache'

import Todo from './components/todo.jsx';


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Todo/>} />
      <Route path='/tacheListe' element={<TacheListe/>} />
      
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
