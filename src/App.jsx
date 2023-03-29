import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import CheckOut from "./components/CheckOut";
import { UserContext } from "./components/StateProvider";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { auth, onAuthStateChanged } from "./firebase.js";
import Footer from "./components/Footer";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders";

const promise = loadStripe(
  "pk_test_51MomSaSBv4arkVCPjr54dHgqHJCXnTqGyGNjB32XtiXXmx7CgEZvF91HHmLkgrCRR4iDvnILSSGwx49LHTys8HCE00TOP3PYn2"
);

function App() {
  const [basketItem, setBasketItem] = useState([]);

  const [totalPrice, setPrice] = useState([]);

  const [userInfo, setuserInfo] = useState();

  const [finalAmount, setFinalAmount] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setuserInfo(authUser);
      } else {
        setuserInfo(null);
      }
    });
  }, []);

  return (
    <UserContext.Provider
      value={{
        basketItem,
        setBasketItem,
        setPrice,
        totalPrice,
        userInfo,
        setFinalAmount,
        finalAmount,
      }}
    >
      <div className="app">
        <Header userInfo={userInfo} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/checkout"
            element={<CheckOut basketItem={basketItem} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/orders" element={<Orders />} />
          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          />
        </Routes>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
