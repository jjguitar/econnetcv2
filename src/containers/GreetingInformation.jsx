import React from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '../hooks/useGetProducts';
import '@styles/Greetings.scss';

const API = 'https://api.escuelajs.co/api/v1/products?limit=10&offset=10';

const ProductList = () => {
	const products = useGetProducts(API);

	return (
		<section className="main-container">
      <h1>Hi Jhon</h1>
      <h3>Good morning</h3>
			<div className="ProductList">
				{products.map(product => (
					<ProductItem product={product} key={product.id} />
				))}
			</div>
		</section>
	);
}

export default ProductList;
