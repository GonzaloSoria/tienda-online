import { useEffect, useState} from "react"
import {useParams} from 'react-router-dom';
import dataBase from '../../data-base';
import { ItemDetail } from "../ItemDetail";


export const ItemDetailContainer = () => {
    const [itemDetail, setItemDetail] = useState([])
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
 
    return (
        <>
            <ItemDetail itemDetail={itemDetail}/>
        </>
    )
}
    