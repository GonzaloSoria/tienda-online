import { Item } from "../Item";

export const ItemList = ({productos}) => {
    return (
        <>
            <div className="item-list-container container my-5">
                {productos.map((producto) => {
                    return (
                        <>
                            <Item key={producto.id} producto={producto}/>
                        </>
                    )
                })}
            </div>
        </>
    );
};