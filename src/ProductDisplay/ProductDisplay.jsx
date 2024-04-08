import './ProductDisplay.css'
import star_empty from '../assets/Breadcrums/star_dull_icon.png'
import star_fill from '../assets/Breadcrums/star_icon.png'
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
function PrdoductDisplay(props)
{
    const renderSpecifications = (product) => {
        if (product.category === "Mobile" && product.brand!="Apple") {
          return (
            <>
              <p>RAM:{product.ram}GB</p>
              <p>Storage: {product.rom}GB</p>
            </>
          );
          
        }
        else if (product.category === "Mobile" && product.brand=="Apple") {
            return (
              <>
                <p>Storage: {product.rom}GB</p>
              </>
            );
        } else if (product.category === "Laptop") {
          return (
            <>
              <p>RAM: {product.ram}GB</p>
              <p>Storage: {product.rom}GB</p>
              <p>Processor: {product.processor}</p>
            </>
          );
        } else if (product.category === "Wearable") {
          return <p>Great for fitness tracking and notifications!</p>;
        }
      };


    const{product}=props;
    const {addToCart}=useContext(ShopContext)



    return(
        <div className="productDisplay">
            <div className="productDisplay-left">
                <div className="productDisplay-left-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productDisplay-img">
                    <img src={product.image} alt="" className="product-main-img" />
                </div>
            </div>
            <div className="productDisplay-right">
                <h1>{product.name}</h1>
                <div className="productDisplay-right-star">
                    <img src={star_fill} alt="" />
                    <img src={star_fill} alt="" />
                    <img src={star_fill} alt="" />
                    <img src={star_fill} alt="" />
                    <img src={star_empty} alt="" />
                    <p>(1754)</p>
                </div>
                <div className="renderSpec">
                    {renderSpecifications(product)}
                </div>
                <div className="productDisplay-right-prices">
                <div className="productDisplay-right-oldprice">${product.old_price}</div>
                <div className="productDisplay-right-newprice">${product.new_price}</div>
                </div>
                <div className="productDisplay-right-description">
                    Explore our curated selection of wearable devices, mobiles, and laptops tailored 
                    for your digital life. From stylish smartwatches and powerful smartphones to versatile 
                    laptops,find tech that keeps you connected and productive. Elevate your technology 
                    experience with our top picks and exclusive deals. Shop now and embrace the future of digital convenience!
                </div>
                <div className="productDisplay-right-model">
                    <h2>Select Model </h2>
                    <div className="model">{new Date().getFullYear()}</div>
                    <div className="model">{new Date().getFullYear()-1}</div>
                    <div className="model">{new Date().getFullYear()-2}</div>
                    <div className="model">{new Date().getFullYear()-3}</div>
                </div>
                <button className='button' onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <div className="productDisplay-right-category"></div>
            </div>
           
        </div>
    )
}
export default PrdoductDisplay
