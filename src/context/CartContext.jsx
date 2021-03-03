import { createContext, useState } from 'react';

//Creación del context
export const CartContext = createContext()

//Creacion del proveedor
export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])
    console.log(carrito);
    
    //obtener el indice del producto
    const isInCart = (id) => {
        return carrito.findIndex(prod => prod.item.id === id)
    }

    //funcion para no duplicar productos en el carrito y sumar los que sean iguales
    const addCart = (item) => {
        let estaCarrito = isInCart(item.item.id)
        if (estaCarrito === -1){
            setCarrito([...carrito, item])
        }else{
            let NuevoItem = {...carrito[estaCarrito], quantity:  carrito[estaCarrito].quantity + item.quantity}
            let listaNueva = carrito.filter(prod => item.item.id !== prod.item.id)
            setCarrito([...listaNueva, NuevoItem])
        }
    }
    
    //obtener la cantidad de productos en el carrito para pasarlo al CartWidget
    const cantidadCarrito = carrito.reduce((acc, el) => {
        return acc = acc + el.quantity;
    }, 0)

    //sumar precios de productos individuales
    const precioTotalPorProducto = () => {
        if(carrito.item.id === carrito.item.id){
            return carrito.quantity * carrito.item.precio
        }
    }

    console.log(precioTotalPorProducto);

    //Sumar el precio total
    const totalAPagar = carrito.reduce((acc, el) => {
        return acc = acc + el.quantity * el.item.precio;
    }, 0)
    console.log(totalAPagar);

    return (
        <>
            <CartContext.Provider value={{carrito, addCart, cantidadCarrito, totalAPagar}}>
                {children}
            </CartContext.Provider>
        </>   
    )
}