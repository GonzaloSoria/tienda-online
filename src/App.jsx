import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import  Navbar from './componentes/Navbar';
import  ItemListContainer from './containers/ItemListContainer';
import  {ItemDetailContainer} from './componentes/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './componentes/Cart';

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
          <Route exact path="/carrito">
            <Cart />
          </Route>                  
        </Switch>
      </CartProvider>   
    </BrowserRouter>
  );
}

export default App;
