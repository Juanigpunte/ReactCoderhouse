
import './App.css'
import Navbar from './components/navbar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  return (

    <BrowserRouter>

      <Navbar />

        <Routes>
            <Route path='*' element= { <Navigate to={"/"} /> } />
            <Route path='/' element= { <h2>Inicio</h2> } />
            <Route path='/nosotros' element= { <h2>Nosotros</h2> } />
            <Route path='/store' element= { <ItemListContainer /> } />
            <Route path='/store/:itemCategory' element= { <ItemListContainer /> } />
            <Route path='/:itemId' element= { <ItemDetailContainer /> } />
        </Routes>

    </BrowserRouter>
  )
}

export default App
