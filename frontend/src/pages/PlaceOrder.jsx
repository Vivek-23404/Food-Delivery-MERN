import { useContext, useEffect, useState } from "react"
import { StoreContext } from "../context/StoreContext"
import axios from "axios"
import {useSelector} from "react-redux"
// import {loadStripe} from "@stripe/stripe-js"


export const PlaceOrder = () => {

  const {getTotalCartAmount, food_list, cartItems} = useContext(StoreContext)

  const {currentUser} = useSelector((state)=> state.user)

 

  const [data, setData] = useState({
    firstName : "",
    lastName : "",
    email : "",
    street : "",
    city : "",
    state : "",
    zipcode : "",
    country : "",
    phone : ""
  })

  const onChange = (e) =>{
    setData({...data, [e.target.name]: e.target.value})
  }


  // useEffect(()=>{
  //   console.log(data);
  // },[data])


  const placeOrderSubmit = async (e) =>{

    try {
      e.preventDefault()

      // const stripe = await loadStripe(process.env.STRIPE_PUBLISHABLE_KEY)
      const orderItems = []

      food_list.map((item)=>{
        if(cartItems[item._id] > 0){
          let itemInfo = item
          itemInfo["quantity"] = cartItems[item._id]
           orderItems.push(itemInfo)
        }
      })


      let orderData = {
        userId : currentUser.rest._id,
        items: orderItems,
        amount : getTotalCartAmount() + 2,
        address : data,
      }




      let resp = await axios.post("/api/order/place", orderData)

      if(resp.data.success){
        const {session_url} = resp.data
        window.location.replace(session_url)
      }
      else{
        alert("Error")
      }

      console.log(orderItems);

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form onSubmit={placeOrderSubmit} className="placeorder-input flex justify-between items-start lg:gap-72 gap-32 mt-16 p-10">

      <div className="">
        <p className="text-lg font-semibold mb-10">Delivery Information</p>

        <div className="flex gap-3">
          <input required name="firstName" onChange={onChange} value={data.firstName} type="text" placeholder="First Name" />
          <input required name="lastName" onChange={onChange} value={data.lastName} type="text" placeholder="Last Name"/>
        </div>

        <input required name="email" onChange={onChange} value={data.email} type="email" placeholder="Email" />
        <input required name="street" onChange={onChange} value={data.street} type="text" placeholder="street"/>

        <div className="flex gap-3">
          <input required name="city" onChange={onChange} value={data.city} type="text" placeholder="City" />
          <input required name="state" onChange={onChange} value={data.state} type="text" placeholder="State"/>
        </div>
        <div className="flex gap-3">
          <input required name="zipcode" onChange={onChange} value={data.zipcode} type="text" placeholder="Zip Code" />
          <input required name="country" onChange={onChange} value={data.country} type="text" placeholder="County"/>
        </div>

        <input required name="phone" onChange={onChange} value={data.phone} type="text" placeholder="Phone" />

      </div>


      <div className="flex-1 flex flex-col justify-between gap-5 w-full">
          <p className="text-lg font-semibold mb-10">Cart Total</p>
          <div className="flex flex-col gap-2">
              <div className="flex justify-between text-[#555]">
                <p>Subtotal</p>
                <p>{getTotalCartAmount()}</p>
              </div>
              <hr />

              <div className="flex justify-between text-[#555]">
                <p>Delivery Fee</p>
                <p>{getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <hr />

              <div className="flex justify-between text-[#555]">
                <b>Total</b>
                <b>{getTotalCartAmount() ? 0 : getTotalCartAmount() + 2}</b>
              </div>


              <button type="submit" className="uppercase border-none text-white bg-red-500 px-5 py-1 rounded-md mt-7">
                Procced to Payment
              </button>
          </div>
        </div>
    </form>
  )
}
