import { useContext } from "react"
import CartItems from "../CartItems/CartItems"
import { ShopContext } from "../Context/ShopContext"

function Cart()
{
    
    return(
        <div className="">
            <CartItems/>
        </div>
    )
}
export default Cart