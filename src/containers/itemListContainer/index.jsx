// import userEvent from '@testing-library/user-event';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import dataBase from '../../data-base';
import { ItemCount } from '../../componentes/ItemCount';
import { ItemList } from '../../componentes/ItemList';



const ItemListContainer = (props) => {

  //consumo de APi
  const [productos, setProductos] = useState([])
  const {id} = useParams()
  useEffect(() => {
    const promesa = new Promise( (resolve, reject) => {
      resolve(dataBase)
    });
    promesa.then((result) => {
      if(id === undefined){
        setProductos(result);
      }else{
        setProductos(result.filter(productos => productos.categoria === id))
      } 
    })
  },[id]);

 
  
  return (
    <>
      <div className="slider">
        <img src="/assets/slider6.jpg" alt="" className="img-fluid" />
      </div>
      <ItemList productos={productos} />
    </>
  )
}

export default ItemListContainer;