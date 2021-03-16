// import userEvent from '@testing-library/user-event';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import dataBase from '../../data-base';
import { ItemCount } from '../../componentes/ItemCount';
import { ItemList } from '../../componentes/ItemList';
import { getFirestore } from '../../firebase';



const ItemListContainer = (props) => {

  //consumo de APi
  const [productos, setProductos] = useState([])
  const {id} = useParams()
  useEffect(() => {
    const db = getFirestore();
    // const itemCollection = db.collection('productos');
    // itemCollection.get().then((value) => {
      // if (id === undefined) {
      //   let aux = value.docs.map(element => {
      //     return element.data
      //   })
      //   setProductos(aux)
      // }else{
      //   let auxDos = value.docs.filter(productos => productos.categoriaID === id)
      //   setProductos(auxDos)
      // }
    })
    // const promesa = new Promise( (resolve, reject) => {
    //   resolve(dataBase)
    // });
    // promesa.then((result) => {
    //   if(id === undefined){
    //     setProductos(result);
    //   }else{
    //     setProductos(result.filter(productos => productos.categoria === id))
    //   } 
    // })
  // },[id]);
 
 
  
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