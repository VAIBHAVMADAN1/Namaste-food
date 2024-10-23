import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

import { useSelector } from "react-redux";

import logo_image from "../image.png"

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);

  //Subscribing to the store using a Selector
  const cartItems = useSelector((store)=> store.cart.items)
  return (
    <div className="flex justify-between bg-red-100 shadow-lg sm:bg-yellow-100">
      <div className="logo-container">
        <img className="w-52" src={logo_image}/>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status: {onlineStatus === true ? '✅' : '🔴'}
          </li>
          <Link to="/"><li className="px-4">Home</li></Link>
          <Link to="/about"><li className="px-4">About Us</li></Link>
          <Link to="/contact"><li className="px-4">Contact Us</li></Link>
          <Link to="/grocery"><li className="px-4">Grocery</li></Link>
          <Link to="/cart"><li className="px-4 font-bold">Cart ({cartItems.length})</li></Link>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;