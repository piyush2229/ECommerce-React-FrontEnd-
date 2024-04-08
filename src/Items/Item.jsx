import { Link } from 'react-router-dom';
import './Item.css';

const Item =(props)=> {
    console.log("Item ID:",props.item);
    return (
        <div className="item">
           <Link to={`/product/${props.item}`}><img className="item-image" onClick={window.scrollTo(0,0)} src={props.image} alt={props.name} /></Link> 
            <p className="item-name">{props.name}</p>
            <div className='item-prices'>
                <div className="item-price-new">
                    {props.new_price}
                </div>
                <div className="item-price-old">
                    {props.old_price}
                </div>
                <p>{props.category}</p>
            </div>
        </div>
    );
}
 export default Item;