import "./Popular.css";
import data_product from "../assets/data.js";
import Item from "../Items/Item";

function Popular() {
    return (
        <div className="popular">
            <h1>POPULAR NOWADAYS</h1>
            <hr/>
            <div className="popular-items">
                {data_product.map((item,i) => (
                    <Item key={i} item={item.id} name={item.name} image={item.image} new_price={`₹${item.new_price}`}
                    old_price={`₹${item.old_price}`}/>
                ))}
            </div>
        </div>
    );
}

export default Popular;
