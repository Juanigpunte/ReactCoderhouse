
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import ItemListContainer from './components/ItemList/ItemListContainer'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import CartProvider from './context/CartContext.jsx';
import CartList from './components/Cart/CartList.jsx';
import Checkout from './components/Checkout/Checkout.jsx';

//Aos animation library
import AOS from "aos";
import 'aos/dist/aos.css'


AOS.init();


function App() {


  return (
    <CartProvider>

      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path='*' element={<Navigate to={"/"} />} />
          <Route path='/' element={<h2>Inicio</h2>} />
          <Route path='/nosotros' element={<h2>Nosotros</h2>} />
          <Route path='/store' element={<ItemListContainer />} />
          <Route path='/store/:itemCategory' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartList />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>

      </BrowserRouter>

    </CartProvider>

  )
}

export default App
