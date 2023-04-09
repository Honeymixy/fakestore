import React from "react";
import PulseLoader from "react-spinners/PulseLoader";
import useFetch from "../Fetcher/useFetch";
import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );
  console.log(id);
  const { title, description, price, image } = data;
  return (
    <div>
      {isLoading && <PulseLoader />}
      {error && <h2>{error.message}</h2>}
      <h2>Single Product</h2>
      <h2>{id}</h2>
      <img src={image} alt="" />
      <div className="singleprice">
        <h2>{title}</h2>
        <p className="desc">{description}</p>
        <h3>${price}</h3>
      </div>
      <Link to="/Products">Back to Products page</Link>
    </div>
  );
};

export default SingleProduct;
