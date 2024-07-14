import { message } from "antd"
import axios from "axios"
import { useEffect, useState } from "react"

export const List = () => {

  const url = "http://localhost:3000/api/images/"

  const [list, setList] = useState([])

  const fetchList = async () =>{
    const res = await axios.get("/api/food/list")
    const data = await res.data

    
    if (data.success) {
      setList(data.foods)
    }
    else{
      message.error(data.message)
    }

  }


  const removeFood = async (foodId) =>{
    try {

      const response = await axios.post("/api/food/removeFood", {id: foodId})

      if(response.data.success){
        message.success(response.data.message)
      }
      else{
        message.error(response.data.message)
      }
      await fetchList()
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchList()
  },[])
  console.log(list);
  return (
    
    <div className="flex w-full md:justify-start md:ml-28 mt-5">
      <div className="flex flex-col gap-3 w-[500px] items-center">
      <p>All Food List</p>
      <div>
        <div className="list-table-formate">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>

        {
          list.map((item,i) =>{
            return(
              <div key={i} className="list-table-formate">
                <img src={url + item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>${item.price}</p>
                <p onClick={()=> removeFood(item._id)} className="cursor-pointer">X</p>
              </div>
            )
          })
        }
      </div>
    </div>
    </div>
  )
}
