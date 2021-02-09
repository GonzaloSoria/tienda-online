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
    imagen: '/assets/air-max-1.jpg',
  },{
    id: 2,
    nombre: "Nike Air Max 720",
    precio: 9000,
    talle: 41,
    imagen: '/assets/air-max-720.jpg',
  },{
    id: 3,
    nombre: "Nike Air Max 270",
    precio: 10000,
    talle: 40,
    imagen: '/assets/air-max-270.jpg',
  },{
    id: 4,
    nombre: "Nike SB Max",
    precio: 10000,
    talle: 40,
    imagen: '/assets/sb-max-premium.jpg',
  },{
    id: 5,
    nombre: "Nike SB Air Max 2",
    precio: 11000,
    talle: 40,
    imagen: '/assets/sb-air-max-2.jpg',
  },{
    id: 6,
    nombre: "Nike Star Runner",
    precio: 11000,
    talle: 40,
    imagen: '/assets/star-runner.jpg',
  }];

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