import React, { useContext } from "react";
import "../css/checkout.css";
import { UserContext } from "./StateProvider";

const CheckOutProduct = () => {
    
    const {basketItem} = useContext(UserContext)
  return (
    <div>
      {basketItem.map((elem, index) => {
        return (
          <div className="checkoutItem" key={index}>
            <div className="checkout__image">
              <img src={elem.image} alt="" />
            </div>
            <div className="checkoutItem__info">
              <h3>{elem.title}</h3>
              <p className="checkoutItem__rating">
                  {Array(elem.rating)
                    .fill()
                    .map((_, i) => {
                      return <span key={i}>⭐</span>;
                    })}
                </p>
              <p>$ {elem.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CheckOutProduct;
