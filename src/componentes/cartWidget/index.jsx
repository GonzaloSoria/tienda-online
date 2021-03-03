import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const { cantidadCarrito } = useContext(CartContext)

  return (
    <>
      <div className="cart-widget-container">
        <span className="carrito-numeros">{cantidadCarrito}</span>
        <a href="#"><img src="/assets/iconbag.png" alt="" className="cart-widget"/></a>
      </div>
    </>
  );
}

export default CartWidget;