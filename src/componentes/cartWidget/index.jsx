import 'bootstrap/dist/css/bootstrap.min.css';
import iconbag from '../../assets/iconbag.png';
import './cartWidget.scss';

const CartWidget = () => {
  return (
    <>
      <div className="cart-widget-container">
        <span className="carrito-numeros">0</span>
        <a href=""><img src={iconbag} alt="" className="cart-widget"/></a>
      </div>
    </>
  );
}

export default CartWidget;