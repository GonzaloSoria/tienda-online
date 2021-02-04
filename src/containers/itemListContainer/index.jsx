import { useState } from 'react';
import { ItemCount } from '../../componentes/ItemCount';


const ItemListContainer = (props) => {

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
      <ItemCount stock={20} contador={contador} onAdd={onAdd} onSubstract={onSubstract} agregarAlCarrito={agregarAlCarrito} />
    </>
  )
}

export default ItemListContainer;