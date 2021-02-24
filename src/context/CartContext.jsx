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
      
    return (
        <>
            <CartContext.Provider value={{carrito, addCart}}>
                {children}
            </CartContext.Provider>
        </>   
    )
}