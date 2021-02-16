import {Link} from 'react-router-dom';

export const Item = ({producto}) => {
    return (
        <>
        <Link to={`/item/${producto.id}`}>
            <div className="col-sm-12 col-md-3 mx-4 item-container shadow">
                <img src={producto.imagen} alt="" className="img-fluid" />
                <h3 className="mb-4" >{producto.nombre}</h3>           
            </div>  
        </Link>              
        </>
    )
}