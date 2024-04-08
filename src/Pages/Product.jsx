import { useContext } from "react"
import { ShopContext } from "../Context/ShopContext"
import { useParams } from "react-router-dom"
import alldata from "../assets/alldata";
import Breadcrums from "../Breadcrums/Breadcrums";
import PrdoductDisplay from "../ProductDisplay/ProductDisplay";
import Description from "../Description/Description";
import RelatedProducts from "../RelatedProducts/RelatedProducts";

function Product()
{
    const{alldata}=useContext(ShopContext)
    const {productId}=useParams();
    const product=alldata.find((e)=>e.id===Number(productId))
    {/*Here we are using context to use all data*/}
    return(
        <div className="product">
            <Breadcrums product={product} />
            <PrdoductDisplay product={product}/>
            <Description/>
            <RelatedProducts/>
        </div>
    )
}
export default Product