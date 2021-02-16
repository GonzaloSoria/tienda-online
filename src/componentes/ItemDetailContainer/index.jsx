import { useEffect, useState } from "react"
import dataBase from '../../data-base';
import { ItemDetail } from "../ItemDetail"
import {useParams} from 'react-router-dom';

export const ItemDetailContainer = () => {

    const [itemDetail, setItemDetail] = useState([])
    const {categoriaID} = useParams()

    //consumo de la api
    useEffect(() => {
        const getItems = new Promise ((resolve, reject) => {
            resolve(dataBase)  
        })
        getItems.then ((result) => {
            setItemDetail(result)
        })
    }, [categoriaID])

    //guardar el producto 
    if(itemDetail.idCategoria === categoriaID) {
        const item = itemDetail.find((items)=>{ 
            return items.idCategoria
        })
        setItemDetail(item)
    }
    
    return (
        <>
            <ItemDetail itemDetail={itemDetail} />
        </>
    )
}
    