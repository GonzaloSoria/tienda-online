// import userEvent from '@testing-library/user-event';
import { useState, useEffect } from 'react';
import dataBase from '../../data-base';
import { ItemCount } from '../../componentes/ItemCount';
import { ItemList } from '../../componentes/ItemList';



const ItemListContainer = (props) => {

  //consumo de APi
  const [productos, setProductos] = useState([])
  useEffect(() => {
    const promesa = new Promise( (resolve, reject) => {
      resolve(dataBase)
    });
    promesa.then((result) => {
      setProductos(result);
    })
  }, []);

  //Estado del contador
  const [contador, setContador] = useState(1)
  //funcion para sumar productos
  const sumar = (stock) => {
    if (contador < stock) {
      setContador(contador + 1);
    }else {
      alert("no hay mas stock");
    }
  }
  //funcion para restar productos
  const restar = () => {
    if(contador > 1) {
      setContador(contador - 1);
    }else {
      alert("no podes comprar menos de 1 producto");
    }   
  }
  //funcion para agregar al carrito
  const agregarAlCarrito = () => {
    if(contador > 1) {
      alert(`Agregaste al carrito ${contador} productos`);
    }else {
      alert(`Agregaste al carrito ${contador} producto`);
    }
  }
  
  return (
    <>
      <div className="slider">
        <img src="/assets/slider6.jpg" alt="" className="img-fluid" />
      </div>
      <ItemList productos={productos} />
      <ItemCount stock={20} contador={contador} sumar={sumar} restar={restar} agregarAlCarrito={agregarAlCarrito} />
    </>
  )
}

export default ItemListContainer;