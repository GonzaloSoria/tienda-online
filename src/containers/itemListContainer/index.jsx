// import userEvent from '@testing-library/user-event';
import { useState, useEffect } from 'react';
import { ItemCount } from '../../componentes/ItemCount';
import { ItemList } from '../../componentes/ItemList';


const ItemListContainer = (props) => {

  //simulacion de api
  const dataBase = [{
    id: 1,
    nombre: "Nike Air Max 1",
    precio: 7000,
    talle: 40,
    imagen: './assets/air-max-1.jpg',
  },{
    id: 2,
    nombre: "Nike Air Max 720",
    precio: 9000,
    talle: 41,
    imagen: './assets/air-max-720.jpg',
  },{
    id: 3,
    nombre: "Nike Air Max 270",
    precio: 10000,
    talle: 40,
    imagen: './assets/air-max-270.jpg',
  }];

  //consumo de APi
  const [productos, setProductos] = useState([])
  useEffect(() => {
    const promesa = new Promise( (resolve, reject) => {
      setTimeout(() => {
        resolve(dataBase)
      }, 5000);
    });
    promesa.then((result) => {
      setProductos(result);
    })
  }, []);

  //Estado del contador
  const [contador, setContador] = useState(1)
  //funcion para sumar productos
  const onAdd = (stock) => {
    if (contador < stock) {
      setContador(contador + 1);
    }else {
      alert("no hay mas stock");
    }
  }
  //funcion para restar productos
  const onSubstract = () => {
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
      <ItemCount stock={20} contador={contador} onAdd={onAdd} onSubstract={onSubstract} agregarAlCarrito={agregarAlCarrito} />
    </>
  )
}

export default ItemListContainer;