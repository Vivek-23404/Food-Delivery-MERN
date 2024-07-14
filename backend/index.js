import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"


import { connectDB } from "./db/connectDB.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import authRouter from "./routes/authRoute.js"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

const app = express()

const port = process.env.PORT || 3000


 
// middlewares
app.use(cors())
dotenv.config()
app.use(express.json())
app.use(cookieParser())

connectDB()

//  api endpoints
app.use("/api/food", foodRouter)
app.use("/api/images", express.static("./upload"))
app.use("/api/user",userRouter)
app.use("/api/auth", authRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)








app.get("/", (req,res)=>{
  res.send("home page")
})


app.listen(port, ()=>{
  console.log("Server is running !!!");
})


app.use((err,req,res,next) =>{
  const statusCode = err.statusCode || 500
  const message = err.message || "Internal Server"

  return res
        .status(statusCode)
        .json({
            success : false,
            message,
            statusCode
          })
})