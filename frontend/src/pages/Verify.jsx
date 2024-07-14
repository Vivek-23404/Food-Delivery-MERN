import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

export const Verify = () => {

  const navigate = useNavigate()

  const [searchParams, setSearchParams] = useSearchParams()
  const success= searchParams.get("success")
  const orderId = searchParams.get("orderId")
  console.log(success,orderId);


  const verifyPayment = async () =>{

    try {
      const resp = await axios.post("/api/order/verify", {success, orderId})
      if(resp.data.success){
        navigate("/myoders")
      }else{
        navigate("/")
      }
    } catch (error) {
      
    }
  }



  useEffect(()=>{
    verifyPayment()
  },[])
  return (
    <div className="min-h-[60vh] grid">
      <div className="w-24 h-24 place-self-center border-4 border-gray-300 border-t-red-500 rounded-full animate-spin duration-75"></div>
    </div>
  )
}
