import { useContext, useState } from "react"
import { assets } from "../assets/assets"
import { StoreContext } from "../context/StoreContext"

export const FoodItem = ({ id, name, price, description, image }) => {
  const url = "http://localhost:3000/api/images/";
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="max-w-sm m-auto rounded-2xl transition delay-100 shadow-lg bg-white hover:shadow-xl transform hover:scale-105 duration-300">
      <div className="relative">
        <img className="w-full h-48 object-cover rounded-t-2xl" src={url + image} alt={name} />

        {
          !cartItems[id]
            ? <img className="w-10 h-10 absolute bottom-4 right-4 cursor-pointer rounded-full bg-red-500 p-2" onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Add to Cart" />
            : <div className="absolute bottom-4 right-4 flex items-center gap-2 p-2 rounded-full bg-white shadow-lg">
              <img className="w-6 h-6 cursor-pointer" onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="Remove from Cart" />
              <p className="text-sm font-medium">{cartItems[id]}</p>
              <img className="w-6 h-6 cursor-pointer" onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Add to Cart" />
            </div>
        }
      </div>

      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <p className="text-lg font-semibold text-gray-800">{name}</p>
          <img className="w-16" src={assets.rating_starts} alt="Rating" />
        </div>

        <p className="text-gray-600 text-sm mb-2">{description}</p>
        <p className="text-red-500 font-semibold text-lg">$ {price}</p>
      </div>
    </div>
  );
};
