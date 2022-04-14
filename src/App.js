import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/NavBar/Footer';
import ItemListContainer from './Components/ListComponent/ItemListContainer';
import ItemDetailContainer from './Components/DetailComponent/ItemDetailContainer';
import ListadoContainer from './Components/Listado/ListadoContainer';

import PruebaOnClick from './Components/Click/PruebaOnClick';


export default function App() {

  return (
    <>
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path='/detalle' element={<ItemDetailContainer />} />
          <Route exact path='/item/:id' element={<ItemDetailContainer />} />

          <Route exact path='/test' element={<PruebaOnClick />} />
          <Route exact path='/listado' element={<ListadoContainer />} />
          <Route path='*' element={<ItemListContainer />} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </>
  );
}