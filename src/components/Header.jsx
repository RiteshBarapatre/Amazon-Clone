import React, { useContext } from "react";
import "../css/header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { UserContext } from "./StateProvider";
import { auth, signOut } from "../firebase.js";

const Header = ({userInfo}) => {

  const {basketItem} = useContext(UserContext)


  const handleauth = ()=>{
    if(userInfo){
      const confirmSignOut = window.confirm("Do you want to Log Out ?")
      if(confirmSignOut){
        signOut(auth)
      }
      else{
        
      }
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img src="images/logo.png" alt="" className="header__logo" />
      </Link>
      <div className="header__search">
        <select name="shopping_dropdown" id="categories_dropdown">
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
          <option value="Hardware">Hardware</option>
        </select>
        <input
          type="text"
          name=""
          id=""
          className="header__searchInput"
          placeholder="Search Amazon"
        />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello {userInfo ? userInfo.email : 'Guest'}</span>
          <Link to={!userInfo && "/login"} style={{textDecoration : 'none',color:"white"}}>
          <span className="header__optionLineTwo" onClick={handleauth}>{userInfo ? 'Sign Out' : 'Sign In'}</span>
          </Link>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout" style={{textDecoration : 'none'}}>
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__basketCount">{basketItem.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
