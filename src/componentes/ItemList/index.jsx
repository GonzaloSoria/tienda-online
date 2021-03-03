import { Item } from "../Item";

export const ItemList = ({productos}) => {
    return (
        <>
        <div className="container">
            <div className="row d-flex justify-content-center">
                {productos.map((producto) => { 
                    return (                          
                        <Item key={producto.id} producto={producto}/>                                                                                         
                    )
                })}            
            </div>
        </div> 
        </>
    );
};