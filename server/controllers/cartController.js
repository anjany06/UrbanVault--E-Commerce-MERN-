import userModel from "../models/userModel"
// add products to user cart
const addToCart = async(req, res)=>{
  try {
    // whenever we do the api call we have to provide itemId and size as userId is provided by auth.js
    const {userId, itemId, size} = req.body;

    const userData = await userModel.findById(userId)
    let cartData = await userData.cartData;
    if(cartData[itemId]){
      if(cardData[itemId][size]){
        cardData[itemId][size] +=1
      }
      else{
        cardData[itemId][size] = 1
      }
    }
    else{
      //creating obj for this item id in cardData
      cardData[itemId] = {};
      //and add that item with size in this
      cardData[itemId][size] = 1
    }

    //updates the new cardData in userModel in DB
    await userModel.findByIdAndUpdate(userId, {cartData})

    res.json({success:true, message:"Added to Cart"})

  } catch (error) {
    console.log(error);
    res.json({success:false, message:error.message})
  }

}
// update user cart
const updateCart = async(req, res)=>{
  try {
    // whenever we do the api call we have to provide itemId,size and quantity as userId is provided by auth.js
    const {userId, itemId, size, quantity} = req.body;
    const userData = await userModel.findById(userId)
    let cartData = await userData.cartData;

    cartData[itemId][size] = quantity;

    await userModel.findByIdAndUpdate(userId, {cartData})

    res.json({success:true, message:"Cart Upadated"})
    
  } catch (error) {
    console.log(error);
    res.json({success:false, message:error.message})
  }
}
// get user cart data
const getUserCart = async(req, res)=>{
try {
  const {userId} = req.body

  const userData = await userModel.findById(userId)
  let cartData = await userData.cartData;

  res.json({success:true, cartData})
  
} catch (error) {
  console.log(error);
    res.json({success:false, message:error.message})
}

}

export {addToCart, updateCart, getUserCart};