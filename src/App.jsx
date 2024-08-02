import { useEffect, useState } from 'react'

import './App.css'
import { BrowserRouter,Router,Route, Routes } from 'react-router-dom';
import PaginaPrincipal from './components/PaginaPrincipal';
import Formulario from './components/auth/Formulario';




function App() {
  const [count, setCount] = useState(0)




  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<PaginaPrincipal/>}></Route>
      <Route path='/log-in' element={<Formulario/>}></Route>
      <Route path='/registro' element={<Formulario/>}></Route>
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
