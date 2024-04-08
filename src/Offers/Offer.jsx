import "./Offer.css"
import offer_girl from '../assets/hero/offer-girl.png'
function Offer()
{
    return(
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>ONLY ON BEST SELLER PRODUCT</p>
                <button>Check Now</button>
            </div>
            <div className="offers-right">
                <img src={offer_girl} alt="" />
            </div>
        </div>
    )
}
export default Offer