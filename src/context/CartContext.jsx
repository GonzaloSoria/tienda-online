import { createContext, useState } from 'react';

//Creación del context
export const CartContext = createContext()

//Creacion del proveedor
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    console.log(cart);

    //funcion para no duplicar productos, si hay 2 del mismo sumarlos
    

    
    return (
        <>
            <CartContext.Provider value={{cart, setCart}}>
                {children}
            </CartContext.Provider>
        </>
        
    )
}