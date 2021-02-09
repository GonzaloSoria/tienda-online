export const ItemCount = ({stock, sumar, contador, restar, agregarAlCarrito}) => {
    return (
        <>
            <div className="container">
            <div className="buttons-container">
                <button onClick={restar}>-</button>
                <b>{contador}</b>
                <button onClick={()=> {sumar(stock)}}>+</button>
            </div>
            <div className="agregar-carrito-container">
                <button onClick={agregarAlCarrito} >Agregar al Carrito</button>
            </div> 
            </div>
            
        </>
    )
}
