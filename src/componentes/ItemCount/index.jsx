import { useState } from 'react';
import { Link } from 'react-router-dom';

export const ItemCount = ({stock, agregarAlCarrito}) => {
     const [contador, setContador] = useState(1)
     const [irAlCarrito, setIrAlCarrito] = useState(false)
     
     //funcion para sumar productos
     const sumar = (stock) => {
         if (contador < stock) {
             setContador(contador + 1);
         }else {
             alert("no hay mas stock");
         }
     }
     //funcion para restar productos
     const restar = () => {
         if(contador > 1) {
             setContador(contador - 1);
         }else {
             alert("no podes comprar menos de 1 producto");
         }   
     }

     const handleAgregarCarrito = () => {
         agregarAlCarrito(contador)
         setIrAlCarrito(true)
     }
    
    return (
        <>
            <div>
                <div className="buttons-container">
                    <button onClick={restar} className="btn btn-secondary">-</button>
                    <b className="px-5 mx-1 w-100">{contador}</b>
                    <button onClick={()=> {sumar(stock)}} className="btn btn-secondary">+</button>
                </div>
                <div className="agregar-carrito-container">
                    {irAlCarrito ? <Link to={`/carrito`}><button className="carrito-button">Ir al Carrito</button></Link> : <button onClick={handleAgregarCarrito} className="carrito-button">Agregar al Carrito</button>}     
                </div> 
            </div>
        </>
    )
}
