import { useEffect, useState } from "react";
import axios from 'axios';

const useGetProducts = (API) => {
	const [products, setProducts] = useState([]);
	const [loadings, setLoadings] = useState(true);

	useEffect(async () => {
		const response = await axios(API);
		setProducts(response.data);
	}, [setLoadings(false)]);

	return {
    products:products,
    loadings
  };
};

export default useGetProducts;

// import React, { useState, useEffect } from "react";
// import Axios from "axios";
// import "./App.css";

// function App() {
//   const [list, setList] = useState([]);
//   useEffect(() => {
//     Axios({
//       url: "https://jsonplaceholder.typicode.com/posts",
//     })
//       .then((response) => {
//         setList(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [setList]);