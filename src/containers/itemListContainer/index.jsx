import 'bootstrap/dist/css/bootstrap.min.css';
import './itemListContainer.scss';
import slide from '../../assets/slider6.jpg'

const ItemListContainer = () => {
  return (
    <>
      <div className="slider">
        <img src={slide} alt=""className="img-fluid" />
      </div>
    </>
  );
}

export default ItemListContainer;