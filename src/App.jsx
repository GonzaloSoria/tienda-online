import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Navbar from './componentes/Navbar/index';
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
