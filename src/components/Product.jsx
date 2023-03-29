import React, { useContext } from "react";
import "../css/product.css";
import { UserContext } from "./StateProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = ({ title, price, image, rating, id }) => {
  const { basketItem, setBasketItem, setPrice, totalPrice } =
    useContext(UserContext);

  const addToCart = (msg) => {
    setBasketItem([
      ...basketItem,
      {
        title,
        price,
        image,
        rating,
        id,
      },
    ]);
    setPrice([...totalPrice, price]);

    toast(msg),
      {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      };
  };

  return (
    <div className="product">
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong> {price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <p key={i}>⭐</p>;
            })}
        </div>
      </div>
      <img src={image} alt="" className="product__image" />
      <button onClick={()=>{addToCart(title)}}>Add to Cart</button>
    </div>
  );
};

export default Product;
