import { useContext, useState } from "react"
import {assets} from "../assets/assets.js"
import { Link } from "react-router-dom"
import { StoreContext } from "../context/StoreContext.jsx"
import {useSelector} from "react-redux"
import { BsFillCartFill } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";




export const Navbar = () => {
  
  const [menu, setMenu] = useState("home")
  const {getTotalCartAmount} = useContext(StoreContext)
  
  const {currentUser} = useSelector(state=>state.user)

  return (
    <div className="flex justify-between items-center py-5">
      <Link to="/">
        <img className="w-14 md:w-20" src={assets.logo} alt="" />
      </Link>

      <ul className="hidden text-sm text-nowrap md:text-xl  md:flex gap-5 text-[#49557e] cursor-pointer">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "activeClass" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "activeClass" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "activeClass" : ""}
        >
          Mobile App
        </li>
        <li
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "activeClass" : ""}
        >
          Contact Us
        </li>
      </ul>

      <div className="flex items-center md:gap-10 gap-2">
        <IoSearch size={25} />

        <div className="relative">
          <Link to="/cart">
            <BsFillCartFill size={25} />
          </Link>

          <div
            className={
              getTotalCartAmount() === 0
                ? ""
                : "absolute min-w-3 min-h-3 bg-red-500 rounded-full top-[-8px] right-[-8px] md:w-5"
            }
          ></div>
        </div>

        {currentUser ? (
          <Link to="/profile">
            <img
              className="w-7 h-7 rounded-full object-cover"
              src={currentUser.rest.profilePicture}
              alt=""
            />
          </Link>
        ) : (
          <Link to="/login">
            <button className="bg-gradient-to-r from-red-400 to-orange-400 text-white md:text-base border-none md:px-6 md:py-3 px-4 py-2 text-sm rounded-full hover:from-red-500 hover:to-orange-500 shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
              Sign In
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
