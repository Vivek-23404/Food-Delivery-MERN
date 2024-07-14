import userModel from "../models/userModels.js";
import jwt from "jsonwebtoken"
import bcryptjs from "bcryptjs"
import validator from "validator";
import { errorHandler } from "../utils/errorHandler.js";



//  Login User

export const LoginUser = async (req,res, next) =>{

  try {
    
    const {password, email}= req.body
    const validUser = await userModel.findOne({email})

    if(!validUser){
      return next(errorHandler(401, "User Not Found"))
    } 
      

    const validPassword = bcryptjs.compareSync(password, validUser.password)
    if (!validPassword){

      return next(errorHandler(401, "Invalid Credentials"))
    } 
    
    const {password: hashedPassword, ...rest} = validUser._doc

    const token = jwt.sign({ id: validUser._id}, process.env.JWT_SECRET)

    const expiryDate = new Date(Date.now() + 3600000) // 1HR

    res
      .cookie("access_token", token, {httpOnly : true, expires : expiryDate})
      .status(200)
      .json({success : true, rest, message : "Login Success"})

  } catch (error) {
    console.log(error);
    res.json({
      success : false,
      message : "Error in Login"
    })
  }
}



export const RegisterUser = async (req,res, next) =>{

  try {
    const {name, email, password} = req.body

    const hashedPassword = bcryptjs.hashSync(password, 10)

    const newUser= await userModel({name, email, password: hashedPassword})
    const response = await newUser.save()

    res
      .status(201)
      .json({
      message : "User created Successfully",
      success  : true,
      response
      })

  } catch (error) {
    res.json({
      success : false,
      message : "Error In Registration"
    })
    console.log(error);
    next(error)
  }
}



export const google = async (req,res,next) =>{

  try {
    
    const user = await userModel.findOne({email : req.body.email})

    if(user){

      const token = jwt.sign({id : user._id}, process.env.JWT_SECRET)

      const {password:hashedPassword, ...rest} = user._doc

      const expiryDate = new Date(Date.now() + 3600000)

      res
        .status(200)
        .cookie("access_token",token, {httpOnly : true, expires : expiryDate})
        .json({
        success : true,
        message : "Login Successfully using Google",
        rest,
      })
    }

    else{

      const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8)
      
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10)

      const newUser = new userModel({
        name : req.body.name,
        email : req.body.email,
        password : hashedPassword,
        profilePicture : req.body.photo
      })

      await newUser.save()

      const token = jwt.sign({id : newUser._id}, process.env.JWT_SECRET)

      const {password: hashedPassword2, ...rest} = newUser._doc

      const expiryDate = new Date(Date.now() + 3600000)

      res
        .cookie("access_token",token, {httpOnly : true, expires : expiryDate})
        .status(201)
        .json({
        success: true,
        message:"Register Success using Google",
        rest
      })



    }
  } catch (error) {
    console.log(error);
    res.json({
      message : "Error in Google Registration",
      success : false

    })
  }
}


export const logout = async (req,res) =>{
  res.clearCookie("access_token").status(200).json({message : "Logout Success", success : true})
}