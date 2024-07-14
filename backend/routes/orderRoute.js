import express from "express"
import { authMiddleware } from "../middleware/authMiddleware.js"
import { getAllOrders, placeOrder, updateStatus, userOrderForFrontend, verifyOrder } from "../controllers/orderController.js"


const orderRouter = express.Router()

orderRouter.post("/place",authMiddleware, placeOrder)

orderRouter.post("/verify", verifyOrder)

orderRouter.post("/userorders",authMiddleware, userOrderForFrontend)


// for admin panel
orderRouter.get("/getAllOrders", getAllOrders)

orderRouter.post("/status", updateStatus)

export default orderRouter

