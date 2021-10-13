import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '../context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
	const { addToCart } = useContext(AppContext);

	const handleClick = item => {
		addToCart(item);
	}

	return (
		<div className="ProductItem">
      <div className="Product-img__container">
        <img src={product.images[0]} alt={product.title} />
      </div>
      <div className="product-details">
        <p>${product.price}</p>
        <p>{product.title}</p>
      </div>
			<div className="product-info">
				<figure onClick={() => handleClick(product)} >
					<img src={addToCartImage} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
