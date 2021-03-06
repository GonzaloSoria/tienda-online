import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { CartDetail } from '../CartDetail';

const Cart = () => {
    const { carrito, totalAPagar } = useContext(CartContext)

    return (
        <>
            <div className="container py-5">
                <div className="row carrito-container text-center align-items-center">
                    {carrito.map((carritoDetalles) => {
                        return (
                            <CartDetail key={carritoDetalles.id} carritoDetalles={carritoDetalles}/>
                        )
                    })}  
                </div> 
                <div className="container">
                    <h4>total a pagar: ${totalAPagar}</h4>
                </div>                        
            </div>
        </>
    )
}

export default Cart;