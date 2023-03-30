import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './product.css';

const Product = (props) => {
    const {img,name,seller,quantity,price,ratings}=props.product;
    const addToCart=props.buttonHandler;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price : ${price}</p>
                <p className='seller'>Manufacturer : {seller}</p>
                <p>Ratting : {ratings} Stars</p>
            </div>
            <button onClick={()=>addToCart(props.product)} className='btn-cart'>
                Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;