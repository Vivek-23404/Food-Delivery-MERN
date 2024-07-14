import { useEffect, useState } from "react"
import {message} from "antd"
import { assets } from "../assets/assets"
import axios from "axios"



export const Add =  () => {

  

  const [image, setImage]  = useState(false)
  const [addData, setAddData] = useState({
    name : "",
    description : "",
    price : "",
    category : "Salad",
  })

  const changeHandler = (e) =>{
    setAddData({...addData, [e.target.name]:e.target.value  })
  }
  const submitHandler = async (e) =>{
    e.preventDefault()
    const formData = new FormData()
    formData.append("name", addData.name)
    formData.append("description", addData.description)
    formData.append("price", Number(addData.price))
    formData.append("category", addData.category)
    formData.append("image", image)



    const res = await axios.post("/api/food/add", formData)
    const data = await res.data

    if (res.data.success) {

      setAddData({
        name : "",
        description: "",
        price: "",
        category : "Salad"
      })
      setImage(false)
      message.success(data.message)
    }
    else{
      message.error(data.message)
    }
    
  }



  // useEffect(()=>{
  //   console.log(addData);
  // },[addData])
  return (
    <div className="px-14 mt-5 text-base text-[#6d6d6d] w-full">
      <form onSubmit={submitHandler} className="flex flex-col gap-6">
        <div className="flex flex-col gap-3 w-32 ">
          <p>Upload Image</p>
          <label className="cursor-pointer" htmlFor="image">
            <img src={image ? URL.createObjectURL(image) :assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=> setImage(e.target.files[0])}  id="image" className="border-[1px]  border-black px-1 py-2" type="file" hidden required />
        </div>

        <div className="max-w-96">
          <p>Product Name</p>
          <input onChange={changeHandler} value={addData.name} className="border-[1px] border-black w-full px-1 py-2" type="text" name="name" placeholder="Type here" />
        </div>

        <div className="max-w-[500px]">
          <p>Product Description</p>
          <textarea onChange={changeHandler} value={addData.description} className="w-full border-[1px] border-black px-1 py-2 " type="text" name="description" placeholder="write here" required></textarea>
        </div>

        <div className="flex gap-10">

          <div>
            <p>Product Category</p>
            <select onChange={changeHandler} value={addData.category} className="border-[1px] border-black w-40 py-2" name="category" >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deaserts">Deaserts</option>
              <option value="Sandwitch">Sandwitch</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          
          <div className="">
            <p>Product Price</p>
            <input onChange={changeHandler} value={addData.price} className="border-[1px] pl-1 border-black w-40 py-2" type="Number" name="price" placeholder="Price" required />
          </div>
        </div>


        <button type="submit" className="max-w-56 py-2 bg-red-500 text-white rounded-md">Add</button>
      </form>
    </div>
  )
}
