import 'bootstrap/dist/css/bootstrap.min.css';
import './itemListContainer.scss';

const ItemListContainer = ({greeting}) => {
  return (
    <>
        <h1>{greeting}</h1>
    </>
  );
}

export default ItemListContainer;