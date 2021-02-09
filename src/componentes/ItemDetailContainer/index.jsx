import { useEffect, useState } from "react"
import { Item } from "../Item"
import { ItemDetail } from "../ItemDetail"

export const ItemDetailContainer = () => {

    const [itemDetail, setItemDetail ] = useState([])

    useEffect(() => {
        const getItems = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(Item)
            }, 2000)
            getItems.then(result)
            setItemDetail(result)
        })
    }, [])

    return (
        <>
            <ItemDetail itemDetail={itemDetail} />
        </>
    )
}
    