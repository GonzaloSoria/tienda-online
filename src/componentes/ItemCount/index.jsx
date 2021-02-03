import './itemCount.scss';
export const ItemCount = ({stock, onAdd, contador, onSubstract}) => {
    return (
        <>
            <div className="container">
            <div className="buttons-container">
                <button onClick={onSubstract}>-</button>
                <b>{contador}</b>
                <button onClick={()=> {onAdd(stock)}}>+</button>
            </div>
            <div className="agregar-carrito-container">
                <button>Agregar al Carrito</button>
            </div> 
            </div>
            
        </>
    )
}
