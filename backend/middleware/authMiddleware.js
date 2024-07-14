import jwt from "jsonwebtoken"
import { errorHandler } from "../utils/errorHandler.js"

export const authMiddleware = async (req,res,next) =>{

  const token = req.cookies.access_token
  // console.log(token);  

  if(!token) {
    return next(errorHandler(401, "Access Denied"))
  }

  if(token){
    jwt.verify(token, process.env.JWT_SECRET , (err, user) =>{
      if(err){
        return next(errorHandler(403, "Token is Invalid"))
      }
      else{
        req.user = user
        next()
      }
    })
  }
}