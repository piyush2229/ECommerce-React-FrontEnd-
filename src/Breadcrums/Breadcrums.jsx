import './Breadcrums.css'
import props from 'prop-types'
import star_empty from '../assets/Breadcrums/star_dull_icon.png'
import star_fill from '../assets/Breadcrums/star_icon.png'
import arrow from '../assets/Breadcrums/arrow.png'

const Breadcrums=(props)=> {
   const {product}=props;
    return (
        <div className="breadcrums">
            HOME <img src={arrow} alt="" /> SHOP <img src={arrow} alt="" /> {product.category} <img src={arrow} alt="" /> {product.name}
        </div>
    );
}

export default Breadcrums;
