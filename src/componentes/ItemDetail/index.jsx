import { useContext } from 'react'
import { ItemCount } from "../ItemCount"
import { CartContext } from '../../context/CartContext';

export const ItemDetail = ({itemDetail}) => {
    const { carrito, addCart } = useContext(CartContext)

    //funcion para agregar al carrito
    const agregarAlCarrito = (contador) => {
        addCart([...carrito, {item: itemDetail, quantity: contador}])
    }

    return (
        <>
            <div className="container">
                <div className="row ">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <img src={itemDetail.imagen} alt="" className="img-fluid"/>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center detalles-producto">
                        <h2>{itemDetail.nombre}</h2>
                        <h3>${itemDetail.precio} ARS</h3>
                        <p className="text-black-50">Stock disponible: {itemDetail.stock} unidades</p>
                        <ItemCount agregarAlCarrito={agregarAlCarrito} stock={itemDetail.stock} /> 
                    </div>
                </div>           
            </div>
        </>
    )
}