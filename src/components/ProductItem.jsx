import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '../context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ exp }) => {
  // console.log(exp)
	const { addToCart } = useContext(AppContext);

	const handleClick = item => {
		addToCart(item);
	}

	return (
		<div className="ProductItem">
      <div className="Product-img__container">
        {/* <img src={exp.images[0]} alt={exp.title} /> */}
      </div>
      <div className="product-details">
        <p>{exp.tittle}</p>
        <p>{exp.date}</p>
      </div>
			<div className="product-info">
				<figure onClick={() => handleClick(exp)} >
					<img src={addToCartImage} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
