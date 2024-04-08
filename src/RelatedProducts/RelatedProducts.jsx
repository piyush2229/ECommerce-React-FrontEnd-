import './RelatedProducts.css';
import data from '../assets/data.js';
import Item from '../Items/Item.jsx';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; 
  }
  return array;
}

function RelatedProducts(props) {
  const shuffledData = shuffleArray([...data]).slice(0, 8);

  return (
    <div className="relatedProducts">
      <h1>RELATED PRODUCTS</h1>
      <hr />
      <div className="relatedProducts-items">
        {shuffledData.map((item, i) => (
          <Item 
            key={i} 
            item={item.id} 
            name={item.name} 
            image={item.image} 
            oldprice={item.old_price} 
            newprice={item.new_price}
          />
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
