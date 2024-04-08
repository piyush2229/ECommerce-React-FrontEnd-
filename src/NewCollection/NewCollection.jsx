import './NewCollection.css'
import Item from "../Items/Item";
import data_new_collection from '../assets/data_new_collection';
function NewCollection(props)
{
    return (
        <div className="new-collection">
            <h1>NEW RELEASES</h1>
            <hr/>
            <div className="items">
                {data_new_collection.map((item,i)=>(
                    <Item key={i} item={item.id} name={item.name} image={item.image} new_price={`₹${item.new_price}`}
                    old_price={`₹${item.old_price}`}/>
                ))}
            </div>
            console.log(data_new_collection);
        </div>
    )
}
export default NewCollection