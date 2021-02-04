export const ItemCount = ({stock, onAdd, contador, onSubstract, agregarAlCarrito}) => {
    return (
        <>
            <div className="container">
            <div className="buttons-container">
                <button onClick={onSubstract}>-</button>
                <b>{contador}</b>
                <button onClick={()=> {onAdd(stock)}}>+</button>
            </div>
            <div className="agregar-carrito-container">
                <button onClick={agregarAlCarrito} >Agregar al Carrito</button>
                <button onClick={agregarAlCarrito} >Agregar al Carrito</button>
            </div> 
            </div>
            
        </>
    )
}
