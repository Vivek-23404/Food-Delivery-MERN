import { useContext } from "react"
import { StoreContext } from "../context/StoreContext"
import { useNavigate } from "react-router-dom"

export const Cart = () => {

  const url = "http://localhost:3000/api/images/"

  const {cartItems, food_list, removeFromCart, getTotalCartAmount} = useContext(StoreContext)

  const navigate = useNavigate()
  return (

    // cart div
    <div className="mt-24">

      {/* cart-items */}
      <div>

        {/* Cart items titles */}
        <div className="grid-cart-items items-center text-gray-700 font-semibold">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>remove</p>
        </div>
        <br />
        <hr />

        {
          food_list.map((item,i)=>{
            if(cartItems[item._id] > 0){
              return(
                <div key={i}>
                  <div className="grid-cart-items items-center my-3 text-black">
                  <img className="w-16" src={url + item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={()=> removeFromCart(item._id)} className="cursor-pointer">X</p>
                  
                </div>

                <hr className="h-[1px] bg-black border-none"/>
                </div>
              )
            }
          })
        }
      </div>

      <div className="mt-20 flex flex-col md:flex-row justify-between gap-5">

        <div className="flex-1 flex flex-col justify-between gap-5">
          <h2>Cart Total</h2>
          <div>
              <div className="flex justify-between text-[#555]">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />

              <div className="flex justify-between text-[#555]">
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <hr />

              <div className="flex justify-between text-[#555]">
                <b>Total</b>
                <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2 }</b>
              </div>


              <button onClick={()=> navigate("/placeorder")} className=" uppercase border-none text-white bg-red-500 px-5 py-1 rounded-md">
                Procced to Checkout
              </button>
          </div>
        </div>

          <div className="flex-1">
            <div>
              <p className="text-[#555]">if you have promocode enter here</p>
              <div className=" flex justify-between items-center bg-[#eaeaea] rounded">
                <input className="bg-transparent border-none outline-none pl-3" type="text" placeholder="Promocode" />
                <button className="w-40 bg-black text-white border-none rounded py-3">Submit</button>
              </div>
            </div>
          </div>

        </div>


      </div>
      

    
  )
}
