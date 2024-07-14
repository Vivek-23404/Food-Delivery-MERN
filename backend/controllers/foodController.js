import { foodModel } from "../models/foodModels.js";
import fs from 'fs';


//  add foodItem

export const addFood = async (req,res) =>{
try {
  
  let image_fileName = `${req.file.filename}`

  const food = new foodModel({
    name : req.body.name,
    description : req.body.description,
    price : req.body.price,
    category : req.body.category,
    image : image_fileName
  })

  await food.save()


  res.json({
    success : true,
    message : "Food Added"
  })

} catch (error) {
  console.log(error);
  res.json({
    success  : false,
    message : "Error"
  })
}
}


export const listFood = async (req,res) =>{

  try {
    
    const foods = await foodModel.find({})
    res.json({
      success : true,
      foods
    })
     
  } catch (error) {
    
    console.log(error);
    res.json({
      success : false,
      message : "Error in Listing Food"
    })
  }
}

export const removeFood = async (req,res) =>{

  try {
    const food = await foodModel.findById(req.body.id)


    // remove image in the server
    fs.unlink(`upload/${food.image}`, ()=>{

    })

    await foodModel.findByIdAndDelete(req.body.id)

    res.json({
      success : true,
      message : "Food removed"
    })


  } catch (error) {
    console.log(error);
    res.json({
      success : false,
      message :"Error in Remove food"
    })
  }
}