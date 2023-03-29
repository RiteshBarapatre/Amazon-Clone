import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/payment.css";
import CheckOutProduct from "./CheckOutProduct";
import { UserContext } from "./StateProvider";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "../axios";
import { db, collection, addDoc } from "../firebase";

const Payment = () => {
  const navigate = useNavigate();

  const { userInfo, basketItem, finalAmount, setBasketItem } =
    useContext(UserContext);

  const [error, setError] = useState(null);
  const [disable, setDisable] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        //Stripe expects the total in the subunits means in paise not in rupees that's
        url: `/payments/create?total=${finalAmount * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basketItem]);

  console.log(clientSecret);
  const stripe = useStripe();
  const elements = useElements();

  const handleChange = (e) => {
    setDisable(e.empty);
    setError(e.error ? e.error.message : "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        console.log(paymentIntent)

        // const docRef = addDoc(collection(db, "users"), {
        //   basket: basketItem,
        //   amount: paymentIntent?.amount,
        //   created: paymentIntent?.created
        // })
        //   .then(() => console.log("Document written with ID: ", docRef.id))
        //   .catch((e) => console.error("Error adding document: ", e));

        setBasketItem([]);
        navigate("/orders", {
          replace: true,
        });
      });
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          CheckOut (<Link to="/checkout">{basketItem?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{userInfo?.email}</p>
            <p>123 React Line</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">{<CheckOutProduct />}</div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <h3>Order Total : ${finalAmount}</h3>
                <button disabled={processing || disable || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
