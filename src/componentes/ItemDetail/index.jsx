export const ItemDetail = ({producto}) => {
    return (
        <>
            <div>
                <img src={producto.imagen} alt=""/>
                <h2>{producto.nombre}</h2>
                <h3>{producto.precio}</h3>
            </div>
        </>
    )
}