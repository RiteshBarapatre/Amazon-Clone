import React, { useState, useContext, useEffect } from "react";
import "../css/checkout.css";
import { UserContext } from "./StateProvider";
import Subtotal from "./Subtotal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckOut = ({ basketItem }) => {
  const [checkOutItem, setCheckOutItem] = useState(basketItem);
  const { setPrice, totalPrice, setBasketItem } = useContext(UserContext);

  const removeItem = (index) => {
    const checkOutItemtwo = checkOutItem.filter((elem, curindex) => {
      return index !== curindex;
    });
    setCheckOutItem(checkOutItemtwo);

    const checkOutItemprice = totalPrice.filter((elem, curindex) => {
      return index !== curindex;
    });
    setPrice(checkOutItemprice);
  };

  useEffect(()=>{
    setBasketItem(checkOutItem);
  },[setCheckOutItem,checkOutItem])

  const notify = (msg) => {
    toast(msg),
      {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      };
  };

  const clearAll = ()=>{
    const confirm = window.confirm("Do you want to clear All basket Items ?")
    if(confirm){
      setCheckOutItem([])
      setPrice([])
    }
      
  }
  return (
    <div className="checkout">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="checkout__left">
        <img
          src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_NotApproved._TTW_.jpg"
          alt=""
          className="checkout__ad"
        />
        <div className="checkout__title">
          <h2>
            {checkOutItem.length === 0
              ? "Your Shopping Basket is Empty"
              : "Your Shopping Basket"}
          </h2>
        </div>
        {checkOutItem.length === 0 ? (
          <img src="images/empty.png" alt="" className="emptycart" />
        ) : (
          checkOutItem.map((elem, index) => {
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
                      return (<span key={i}>⭐</span>)
                    })}
                </p>
                  <p>$ {elem.price}</p>
                  <button
                    onClick={() => {
                      removeItem(index);
                      notify("Item Removed from Basket");
                    }}
                  >
                    Remove From Cart
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="checkout__right">
        <Subtotal />
        {checkOutItem.length === 0 ? '' : (
          <button className="emptyWholeBasket" onClick={clearAll}>Empty the Whole Basket</button>
        )}
      </div>
    </div>
  );
};

export default CheckOut;
