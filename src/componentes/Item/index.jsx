import {Link} from 'react-router-dom';

export const Item = ({producto}) => {
    return (
        <>
        <div className="col-sm-12 col-md-3 mx-4 item-container shadow">
            <Link to={`/item/${producto.id}`}>              
                <img src={producto.imagen} alt="" className="img-fluid" />
                <h3 className="mb-4" >{producto.nombre}</h3>                          
            </Link>    
        </div>           
        </>
    )
}