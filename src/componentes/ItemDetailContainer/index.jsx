import { useEffect, useState } from "react"
import dataBase from '../../data-base';
import { ItemDetail } from "../ItemDetail"

export const ItemDetailContainer = () => {

    const [itemDetail, setItemDetail] = useState([])
    //consumo de la api
    useEffect(() => {
        const getItems = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(dataBase)
            }, 2000)  
        })
        getItems.then ((result) => {
            setItemDetail(result)
        })
    }, [])

    //guardar el producto con el id 1 en itemDetail
    if(itemDetail.length > 0) {
        const item = itemDetail.find((items)=>{ 
            return items.id === 1
        })
        setItemDetail(item)
    }
    
    return (
        <>
            <ItemDetail itemDetail={itemDetail} />
        </>
    )
}
    