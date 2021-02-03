import 'bootstrap/dist/css/bootstrap.min.css';
import './itemListContainer.scss';
import slide from '../../assets/slider6.jpg'
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
      alert("no podes comprar menos de 1 prenda");
    }   
  }

  return (
    <>
      <div className="slider">
        <img src={slide} alt=""className="img-fluid" />
      </div>
      <ItemCount stock={20} contador={contador} onAdd={onAdd} onSubstract={onSubstract} />
    </>
  )
}

export default ItemListContainer;