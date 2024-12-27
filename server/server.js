// as we write type:module so we can use import statement in this project
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'

// App config

const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

//Middlewares
app.use(express.json())
//using this we can access backend from any ip
app.use(cors())

//api endpoints

app.use("/api/user" , userRouter)
app.get("/",(req, res)=>{
 res.send("API WORKING")
})

app.listen(port, ()=>{
  console.log("Server started on Port: " + port);
})




