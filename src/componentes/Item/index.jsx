export const Item = ({producto}) => {
    return (
        <>
            <div className="item-container shadow">
                <img src={producto.imagen} alt="" className="img-fluid" />
                <h3>{producto.nombre}</h3>
                <p>${producto.precio} ARS</p>              
            </div>              
        </>
    )
}