import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/navbar/index';
import ItemListContainer from './containers/itemListContainer';

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header> 
      <ItemListContainer greeting={"Bienvenidos a Nike"} />
    </>
  );
}

export default App;
