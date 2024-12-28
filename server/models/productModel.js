import mongoose from "mongoose";

//required ensures its value if not the data is not stored in db
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price:{
    type:Number,
    required:true
  },
  image:{
    type:Array,
    required:true
  },
  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
    required: true,
  },
  sizes: {
    type: Array,
    required: true,
  }, 
  bestseller: {
    type: Boolean,
  },
  date: {
    type: Number,
    required: true,
  }

})
// this will ensures ki ager model phle se hi bna h toh woh use ho jaye aur naya model na bne
const productModel = mongoose.models.product || mongoose.model("product", productSchema);

export default productModel