import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Navbar from './componentes/Navbar';
import ItemListContainer from './containers/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ItemDetailContainer } from './componentes/ItemDetailContainer';

const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
