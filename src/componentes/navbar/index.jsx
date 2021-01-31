import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../cartWidget';
import './navbar.scss';
import nikelogo from '../../assets/nikelogo.png';
import instagram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';

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
              <li>Hombre</li>
              <li>Mujer</li>
              <li>Niños</li>
              <li>Accesorios</li>
              <li>Sale</li>
            </ul>
            <div className="social-media">
              <img src={instagram} alt=""/>
              <img src={facebook} alt=""/>
              <img src={twitter} alt=""/>
            </div>
          </div>
          <a href="#"><img src={nikelogo} alt="" className="nike-logo"/></a>           
          <CartWidget />
        </nav>
    </>
  );
}

export default Navbar;