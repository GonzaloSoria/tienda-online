import { createContext, useState } from 'react';

//Creación del context
export const CartContext = createContext()

//Creacion del proveedor
export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])
    console.log(carrito);

    //obtener el indice del producto
    const isInCart = (id) => {
        return carrito.findIndex(prod => prod.id === id)
    }

    //funcion para no duplicar productos, si hay 2 del mismo sumarlos
    const addCart = (item) => {
        let estaCarrito = isInCart(item.itemDetail.id)
        if (estaCarrito === -1){
            setCarrito(item)
        }else{
            setCarrito(carrito[estaCarrito].quantity = carrito[estaCarrito].quantity + carrito.quantity)
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