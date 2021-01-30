import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../cartWidget';
import './navbar.scss';
import nikelogo from '../../assets/nikelogo.png';

const Navbar = () => {
  return (
    <>
        <nav className="navbar container d-flex justify-content-space-between align-items-center fixed">
          <input type="checkbox" id="btn-menu"/>
            <label htmlFor="btn-menu" className="lbl-menu">
              <span className="span1"></span>
              <span className="span2"></span>
              <span className="span3"></span>
            </label>
          <div className="menu">
          <ul>
            <li>Hombre</li>
            <li>Mujer</li>
            <li>Niños</li>
            <li>Accesorios</li>
            <li>Sale</li>
          </ul>
          </div>
          <a href="#"><img src={nikelogo} alt="" className="nike-logo"/></a>           
          <CartWidget />
        </nav>
    </>
  );
}

export default Navbar;