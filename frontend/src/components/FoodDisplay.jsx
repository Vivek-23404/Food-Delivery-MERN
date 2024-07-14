import { useContext } from "react"
import { StoreContext } from "../context/StoreContext"
import { FoodItem } from "./FoodItem"

export const FoodDisplay = ({category}) => {

  const {food_list} = useContext(StoreContext)
  return (
    <div id="food_display" className="mt-7">
      <h2 className="text-2xl font-bold">Top Dishes near you</h2>

      <div className="grid grid-auto-fill-minmax mt-7 gap-7 ">
        {
          food_list.map((item,i)=>{

            if(category==="all" || category===item.category){

              return <FoodItem key={i} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
            }

          })
        }
      </div>
    </div>
  )
}
