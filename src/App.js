import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemDetailContainer from './Components/DetailComponent/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer';
import Footer from './Components/NavBar/Footer';


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer />
      <Footer />
    </>
  );
}

export default App;
