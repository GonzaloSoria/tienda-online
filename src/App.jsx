import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Navbar from './componentes/Navbar';
import ItemListContainer from './containers/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ItemDetailContainer } from './componentes/ItemDetailContainer';
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>  
          <Route exact path="/categoria/:id">
            <ItemListContainer />
          </Route>  
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>                      
        </Switch>
      </CartProvider>   
    </BrowserRouter>
  );
}

export default App;
