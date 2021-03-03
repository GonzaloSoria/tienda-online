export const CartDetail = ({carritoDetalles}) => {
    return (
        <>
            <div className="col-sm-12 col-md-2 col-lg-2 carrito-container-detalles">
                <img src={carritoDetalles.item.imagen} className="img-fluid" alt=""/>
            </div> 
            <div className="col-sm-12 col-md-3 col-lg-4 carrito-container-detalles">
                <p className="tituloCarrito">nombre</p>
                <h2>{carritoDetalles.item.nombre}</h2>
            </div>
            <div className="col-sm-12 col-md-1 col-lg-2 carrito-container-detalles">
                <p className="tituloCarrito">cantidad</p>
                <h3>x{carritoDetalles.quantity}</h3>
            </div>
            <div className="col-sm-12 col-md-1 col-lg-2 carrito-container-detalles">
                <p className="tituloCarrito">eliminar</p>
                <p>X</p>
            </div>
            <div className="col-sm-12 col-md-2 col-lg-2 carrito-container-detalles">
                <p className="tituloCarrito">precio</p>
                <h4>{carritoDetalles.item.precio}</h4>
            </div>  
        </>
    )
}