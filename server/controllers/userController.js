
//Route for user Login
const loginUser = async(req, res)=>{
  res.json({msg: "login api working"})

}

//Route for user Registration
const registerUser = async(req, res)=>{

  res.json({msg: "register api working"})
}

//Route for admin login
const adminLogin = async(req, res)=>{
  res.json({msg: "admin api working"})
}

export {loginUser, registerUser, adminLogin}