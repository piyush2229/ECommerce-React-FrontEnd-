import Hero from "../Hero/Hero"
import Popular from "../Popular/Popular"
import Offer from "../Offers/Offer"
import NewCollection from "../NewCollection/NewCollection"
import NewsLetter from "../NewsLetter/NewsLetter"
function Shop()
{
    return(
        <div>
            <Hero/>
            <Popular/>
            <Offer/>
            <NewCollection/>
            <NewsLetter/>
        </div>
    )
}
export default Shop