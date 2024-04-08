import React, { useContext, useState, useEffect } from "react";
import "./css/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown from '../assets/banner/dropdown.png';
import Item from '../Items/Item.jsx';

const ShopCategory = (props) => {
    const { alldata } = useContext(ShopContext);
    const itemsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);

    // Reset currentPage when category changes
    useEffect(() => {
        setCurrentPage(1);
    }, [props.category]);

    // Calculate the index of the first and last items to display on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const itemsToShow = alldata.filter(item => item.category === props.category).slice(indexOfFirstItem, indexOfLastItem);

    const handleLoadMore = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const noMoreProducts = indexOfLastItem >= alldata.filter(item => item.category === props.category).length;

    return (
        <div className="shop-category">
            <img src={props.banner} alt="" className="shopcategory-banner" />
            <div className="shopcategory-indexsort">
                <p>
                    <span>Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, alldata.filter(item => item.category === props.category).length)} out of {alldata.filter(item => item.category === props.category).length} products</span>
                </p>
                <div className="shopcategory-sort">
                    Sort By:<img src={dropdown} alt="" />
                </div>
            </div>
            <div className="shopcategory-products">
                {itemsToShow.map((item, i) => (
                    <Item key={i} item={item.id} name={item.name} image={item.image} new_price={`₹${item.new_price}`} old_price={`₹${item.old_price}`} />
                ))}
            </div>
            {!noMoreProducts && (
                <div className="shopcategory-loadmore" onClick={handleLoadMore}>
                    Explore More
                </div>
            )}
        </div>
    )
};

export default ShopCategory;
