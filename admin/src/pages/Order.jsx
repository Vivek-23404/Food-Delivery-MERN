import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { assets } from "../assets/assets.js"
import { message } from "antd"

export const Order = () => {

  const [orders, setOrders] = useState([])
   

  const fetchAllOrders = async () =>{

    try {
      const resp = await axios.get("/api/order/getAllOrders")

      if(resp.data.success){
        setOrders(resp.data.orders)
        console.log(resp.data.orders);
      }
      else{
        message.error(resp.data.message)
      }

    } catch (error) {
      console.log(error);
    }
  }


  const statusHandler = async (e, orderId) =>{

    console.log(e.target.value,orderId);

    const resp = await axios.post("/api/order/status", {orderId, status : e.target.value})

    if(resp.data.success){
      message.success(resp.data.message)
      fetchAllOrders()
    }
  }



  useEffect(()=>{
    fetchAllOrders()
  }, [])
  return (
    <div className=" px-4">
      
      <h3>Orders Page</h3>

      <div>
        {
          orders.map((order, i)=>(
            <div key={i} className="adminOrders-div">
              <img src={assets.parcel_icon} alt="ad" />

              <div className="">
                <p className="font-semibold">
                  {order.items.map((item, i)=>{
                    if(i === order.items.length - 1){
                      return item.name + " X " + item.quantity 
                    }
                    else{
                      return item.name + " X " + item.quantity + ","
                    }
                  })}
                </p>

                <p className="font-semibold mt-5 mb-1">{order.address.firstName + " " + order.address.lastName}</p>

                <div className="mt-2">
                  <p>{order.address.street + "," }</p>
                  <p>{order.address.city + "," + order.address.state + "," + order.address.country} </p>
                </div>

                <p>{order.address.phone}</p>
                
              </div>


              <p>Items : {order.items.length}</p>

              <p>${order.amount}</p>

              <select onChange={(e)=>statusHandler(e, order._id)} value={order.status} className="bg-red-100 border-2 border-red-400 px-3 outline-none">
                <option value="Food Processing">Food Processing</option>
                <option value="Out for Delivery">Out for Delivery</option>
                <option value="Deliverd">Deliverd</option>
              </select>
            </div>
          ))
        }
      </div>


    </div>
  )
}
