import { createContext, useEffect, useState } from "react";
// import {food_list} from "../assets/assets.js"
export const StoreContext = createContext(null)
import axios from "axios";
import {useSelector} from "react-redux"


export const StoreContextProvider =  (props) =>{

  const {currentUser} = useSelector((state) => state.user)
  const [cartItems, setCartItems] =  useState({})
  const [food_list, setFoodList] = useState([])

  const addToCart = async (itemId) =>{
    if(!cartItems[itemId]){
      setCartItems((prev)=> ({...prev, [itemId] : 1}))
    }

    else{
      setCartItems((prev) => ( {...prev, [itemId]: prev[itemId] + 1}))
    }

    const resp = await axios.post("/api/cart/add", {itemId, userId : currentUser.rest._id})
    console.log(resp);
  }



  const removeFromCart = async (itemId) =>{
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId]-1 }))

    const resp = await axios.post("/api/cart/remove", {itemId, userId : currentUser.rest._id})
    console.log(resp.data);
  }

  

  const getTotalCartAmount = () =>{
    let TotalAmount = 0;
    for(const item in cartItems){

      if(cartItems[item]>0){

        let itemInfo = food_list.find((product)=> product._id === item)
        TotalAmount += itemInfo.price * cartItems[item]
      }
    }
    return TotalAmount
  }


  const fetchFoodData = async ()=>{
    const resp = await axios.get("/api/food/list")
    setFoodList(resp.data.foods)
  }


  const loadCartData = async () =>{
    console.log(currentUser);
  
    if(currentUser.rest._id){
      const resp = await axios.post("/api/cart/get",{userId : currentUser.rest._id})
      console.log(resp.data.cartData); 
      setCartItems(resp.data.cartData)
    }else{
      setCartItems([])
    }
  }


  useEffect(()=>{
    async function loadData(){
      await fetchFoodData()
      await loadCartData()
    }
    console.log("hello");

    loadData()
  },[])


  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount
  }



  


  return(
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  ) 
}