export const ItemCount = ({stock, sumar, contador, restar, agregarAlCarrito}) => {
    
    return (
        <>
            <div>
                <div className="buttons-container">
                    <button onClick={restar} className="btn btn-secondary">-</button>
                    <b className="px-5 mx-1 w-100">{contador}</b>
                    <button onClick={()=> {sumar(stock)}} className="btn btn-secondary">+</button>
                </div>
                <div className="agregar-carrito-container">
                    <button onClick={agregarAlCarrito} className="carrito-button">Agregar al Carrito</button>
                </div> 
            </div>
        </>
    )
}
