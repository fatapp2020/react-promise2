import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ContextProvider from './Context/ContextProvider';

import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/NavBar/Footer';
import ItemListContainer from './Components/ListComponent/ItemListContainer';
import ItemDetailContainer from './Components/DetailComponent/ItemDetailContainer';
import ListadoContainer from './Components/Listado/ListadoContainer';

import PruebaOnClick from './Components/Click/PruebaOnClick';
import Test from './Components/Test/Test';


export default function App() {

  return (
    <>

      <ContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<ListadoContainer />} />
            <Route exact path='/category/:categoryId' element={<ItemListContainer />} />
            <Route exact path='/item/:id' element={<ItemDetailContainer />} />

            <Route exact path='/prueba' element={<PruebaOnClick />} />
            <Route exact path='/test' element={<Test />} />
            <Route path='*' element={<ItemListContainer />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </ContextProvider>

    </>
  );
}