import React, { useContext } from 'react';
import ProductItem from '@components/ProductItem';
// import useGetProducts from '../hooks/useGetProducts';
import AppContext from '../context/AppContext';
import '@styles/Greetings.scss';

// const API = 'https://api.escuelajs.co/api/v1/products?limit=10&offset=10';

const ProductList = () => {
	// const products = useGetProducts(API);
  const { searchedTodos, loading } = useContext(AppContext)
  // console.log(searchedTodos)

  const expSkeleton = {
    id: 99999999999999999999999,
    tittle: 'Cargando las Experiencias...',
    date: 'YYYY-MM-DD...'
  }
	return (
		<section className="main-container">
      <h1>Hi Jhon</h1>
      <h3>Good morning</h3>
      {loading &&
        <ProductItem exp={expSkeleton} key={expSkeleton.id} />
      }
			<div className="ProductList">
				{searchedTodos.map(exp => (
					<ProductItem exp={exp} key={exp.id} />
				))}
			</div>
		</section>
	);
}

export default ProductList;
