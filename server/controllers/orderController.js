import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

//placing order using COD method
const placeOrder = async(req, res)=>{
try {
  const {userId, items, amount, address} = req.body;
  const orderData = {
    userId,
    items,
    amount,
    address,
    paymentMethod:"COD",
    payment:false,
    date:Date.now()
  }

  const newOrder = new orderModel(orderData);
  await newOrder.save();

  await userModel.findByIdAndUpdate(userId, {cartData : {}})

  res.json({success: true, message: "Order Placed"});
  
} catch (error) {
  console.log(error);
  res.json({success: false, message:error.message})
  
}
}
//placing order using Stripe method
const placeOrderStripe = async(req, res)=>{
  
}

//placing order using razorpay method
const placeOrderRazorpay = async(req, res)=>{
  
}

//All orders data for admin panel
const allOrders = async(req,res) =>{

}

// User orders data for Frontend
const userOrders = async(req,res)=>{

}

//Update order Status from admin Panel
const updateStatus = async(req,res)=>{

}

export {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders,userOrders, updateStatus};