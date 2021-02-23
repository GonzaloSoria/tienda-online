import { useEffect, useState, useContext } from "react"
import {useParams} from 'react-router-dom';
import dataBase from '../../data-base';
import { ItemDetail } from "../ItemDetail";
import { CartContext } from '../../context/CartContext';

export const ItemDetailContainer = () => {
    const [itemDetail, setItemDetail] = useState([])
    const { cart, setCart } = useContext(CartContext)
    const {id} = useParams()
    
    //consumo de la api
    useEffect(() => {
        const getItems = new Promise ((resolve, reject) => {
            resolve(dataBase)  
        })
        //setear a itemDetail el producto seleccionado para mostrarlo en pantalla
        getItems.then ((result) => {
            setItemDetail(result.find((items) => items.id === id))
        })
    }, [id])

     //Estado del contador
    const [contador, setContador] = useState(1)
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
    
    // const agregarAlCarrito = () => {
    //     if(contador > 1) {
    //         alert(`Agregaste al carrito ${contador} productos`);
    //     }else {
    //         alert(`Agregaste al carrito ${contador} producto`);
    //     }
    // }

    //funcion para agregar al carrito
    const agregarAlCarrito = () => {
        setCart([...cart, {item: itemDetail, quantity: contador}])
    }
    
    return (
        <>
            <ItemDetail itemDetail={itemDetail} stock={20} contador={contador} sumar={sumar} restar={restar} agregarAlCarrito={agregarAlCarrito}/>
        </>
    )
}
    