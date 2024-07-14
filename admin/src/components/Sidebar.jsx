import {assets} from "../assets/assets.js"
import { NavLink } from "react-router-dom"


export const Sidebar = () => {
  return (
    <div className="w-20 sm:w-32 md:w-64 min-h-screen border border-t-0 border-black">

      <div className="pt-12 pl-5 flex flex-col gap-5">

        <NavLink to="/add" className="flex items-center gap-3 border border-black px-3 py-2 cursor-pointer">
          <img src={assets.add_icon} alt="" />
          <p className="hidden md:block">Add Items</p>
        </NavLink>

        <NavLink to="/list" className="flex items-center gap-3 border border-black px-3 py-2 cursor-pointer">
          <img src={assets.order_icon} alt="" />
          <p className="hidden md:block">List Items</p>
        </NavLink>

        <NavLink to="/order" className="flex items-center gap-3 border border-black px-3 py-2 cursor-pointer">
          <img src={assets.order_icon} alt="" />
          <p className="hidden md:block">Orders</p>
        </NavLink>
        
      </div>

    </div>
  )
}
