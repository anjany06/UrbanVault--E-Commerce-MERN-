import express from "express"
import { addToCart, getUserCart, updateCart } from "../controllers/cartController.js"

const cardRouter = express.Router();

cardRouter.post( "/get", getUserCart);
cardRouter.post("/add" , addToCart)
cardRouter.post("/update", updateCart)

export default cardRouter;