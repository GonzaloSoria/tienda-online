import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/navbar/index';
import ItemListContainer from './containers/ItemListContainer';

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header> 
      <ItemListContainer />
    </>
  );
}

export default App;
