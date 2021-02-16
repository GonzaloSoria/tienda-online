import { ItemCount } from "../ItemCount"

export const ItemDetail = ({itemDetail, stock, contador, sumar, restar, agregarAlCarrito}) => {
    return (
        <>
            <div className="container">
                <div className="row ">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <img src={itemDetail.imagen} alt="" className="img-fluid"/>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center detalles-producto">
                        <h2>{itemDetail.nombre}</h2>
                        <h3>$ {itemDetail.precio} ARS</h3>
                        <p className="text-black-50">Stock disponible: {stock} unidades</p>
                        <ItemCount stock={20} contador={contador} sumar={sumar} restar={restar} agregarAlCarrito={agregarAlCarrito} />
                    </div>
                </div>          
            </div>
        </>
    )
}