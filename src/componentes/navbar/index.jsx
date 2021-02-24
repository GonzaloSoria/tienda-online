import CartWidget from '../CartWidget';
import {Link} from 'react-router-dom';

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
                <li><Link to={`/`}>Home</Link></li>
                <li><Link to={`/categoria/hombre`}>Hombre</Link></li>
                <li><Link to={`/categoria/mujer`}>Mujer</Link></li>
                <li><Link to={`/categoria/niños`}>Niños</Link></li>
                <li><Link to={`/categoria/accesorios`}>Accesorios</Link></li>
                <li><Link to={`/categoria/sale`}>Sale</Link></li>      
              </ul>
            </div>
            <Link to={`/`}><img src="/assets/nike-logo.png" alt="" className="nike-logo"/></Link>  
            <Link to={`/carrito`}><CartWidget /></Link>        
            
          </nav>
    </>
  );
}

export default Navbar;