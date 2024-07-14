import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { assets } from "../assets/assets"

export const MyOders = () => {

  const {currentUser} = useSelector((state)=>state.user)
  const [data, setData] = useState([])

  const fetchOrders = async () =>{
    try {
      const resp = await axios.post("/api/order/userorders", {userId:currentUser.rest._id})

      setData(resp.data.orders)
      console.log(resp.data.orders);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(()=>{

    fetchOrders()
  }, [])
  return (
    <div className="px-10">
      <h2>My Orders</h2>

      <div className="flex flex-col gap-5 mt-8">
        {
          data.map((orders, i)=>{
            return(
              <div key={i} className="myorders-grid">
                <img className="w-8 md:w-20" src={assets.parcel_icon} alt="" />
                <p>{orders.items.map((item, i)=>{
                  if(i === orders.items.length - 1){
                    return item.name + " X " + item.quantity
                  }else{
                    return item.name + " X " + item.quantity + ","
                  }
                })}</p>

                <p>${orders.amount}</p>
                <p>Items : {orders.items.length}</p>
                <p><span className="text-red-500">&#x25cf;</span> <b className="text-[#454545]">{orders.status}</b> </p>

                <button onClick={fetchOrders} className="px-2 py-1 text-xs  md:px-3 md:py-2 md:text-sm  rounded bg-gray-600 text-white">Track Order</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
