import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../cartWidget';
import './navbar.scss';
import nikelogo from '../../assets/nike-logo.png';

const Navbar = () => {
  return (
    <>
          <nav className="position-fixed navbar d-flex justify-content-space-between align-items-center">
            <input type="checkbox" id="btn-menu"/>
              <label htmlFor="btn-menu" className="lbl-menu">
                <span className="span1"></span>
                <span className="span2"></span>
                <span className="span3"></span>
              </label>
            <div className="menu">
              <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Hombre</a></li>
                <li><a href="">Mujer</a></li>
                <li><a href="">Niños</a></li>
                <li><a href="">Accesorios</a></li>
                <li><a href="">Sale</a></li>
              </ul>
            </div>
            <a href="#"><img src={nikelogo} alt="" className="nike-logo"/></a>           
            <CartWidget />
          </nav>
    </>
  );
}

export default Navbar;