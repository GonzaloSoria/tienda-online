export const ItemDetail = ({itemDetail}) => {
    return (
        <>
            <div className="container">
                <img src={itemDetail.imagen} alt=""/>
                <h2>{itemDetail.nombre}</h2>
                <h3>{itemDetail.precio}</h3>
            </div>
        </>
    )
}