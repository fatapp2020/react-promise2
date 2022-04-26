import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

// import ContextProvider from './Context/ContextProvider';

import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/NavBar/Footer';
import ItemListContainer from './Components/ListComponent/ItemListContainer';
import ItemDetailContainer from './Components/DetailComponent/ItemDetailContainer';
import Clase10 from './Components/Clase10/Clase10';
import Clase11 from './Components/Clase11/Clase11';
import Clase11listado from './Components/Clase11/Clase11listado';


import PruebaOnClick from './Components/Click/PruebaOnClick';
import Test from './Components/Test/Test';
import CartContextProvider from './Components/CartContext';
import CartDetail from './Components/Cart/CartDetail';


export default function App() {

  return (
    <>

      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>

            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/category/:categoryId' element={<ItemListContainer />} />
            <Route exact path='/item/:id' element={<ItemDetailContainer />} />
            <Route exact path='/cart' element={<CartDetail />} />

            <Route exact path='/prueba' element={<PruebaOnClick />} />
            <Route exact path='/test' element={<Test />} />

            <Route exact path='/clase10' element={<Clase10 />} />
            <Route exact path='/clase11' element={<Clase11 />} />
            <Route exact path='/clase11L' element={<Clase11listado />} />
            <Route path='*' element={<ItemListContainer />} />

          </Routes>

          <Footer />
        </BrowserRouter>
      </CartContextProvider>

    </>
  );
}