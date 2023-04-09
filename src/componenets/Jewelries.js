import React from "react";
import PulseLoader from "react-spinners/PulseLoader";
import useFetch from "../Fetcher/useFetch";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Jewelries = ({cartItem,setcartItems,handleAddToCart}) => {
  const { data, isLoading, error } = useFetch(
    "https://fakestoreapi.com/products/category/jewelery"
  );
  
  const notify = () => toast("An item has been added!")
  return (
    <div>
      <h2 className="details">
        <span>Oyind's</span>Main Store
      </h2>
      {isLoading && <PulseLoader />}
      {error && <h2>{error.message}</h2>}
      <h2>Jewelries</h2>
      <div className="innerdata">
        {data.map((datum) => {
          const { id, image, rating, price } = datum;
          return (
            <div className="innerdatas" key={id}>
              <Link to={`/SingleProduct/${id}`}>
                <img src={image} alt="" className="images" />
                <div className="tobe">
                  <h2>{rating.rate}</h2>
                  <h3>Price ${price}</h3>
                </div>
              </Link>
              <div className="clickbtn">
                <button onClick={()=>{handleAddToCart(datum); notify()}}>🛒 Add to cart</button>
              </div>
            </div>
          );
        })}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Jewelries;
