import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from 'bcryptjs'
import jwt  from "jsonwebtoken";

const createToken = (id) =>{
  return jwt.sign({id}, process.env.JWT_SECRET)
}
//Route for user Login
const loginUser = async(req, res)=>{
 

}

//Route for user Registration
const registerUser = async(req, res)=>{
  try{
    const {name, password, email } = req.body;
    // checking user already exits
    const exists = await userModel.findOne({ email });
    if(exists){
      return res.json({success:false, message:"user already exists"})
    }
    // validating email format and strong password
    if(!validator.isEmail(email)){
      return res.json({success:false, message:"Invalid email format"})
    }
    if(password.length < 8 ){
      return res.json({success:false, message:"Please enter a strong password"})
    }

    //hashing pssword
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword
    })

    const user = await newUser.save()

    const token = createToken(user._id)

    res.json({success:true, token})


  }
  catch(error){

    console.log(error);
    res.json({success: false, message: error.message})
  }

  
}

//Route for admin login
const adminLogin = async(req, res)=>{

}

export {loginUser, registerUser, adminLogin}