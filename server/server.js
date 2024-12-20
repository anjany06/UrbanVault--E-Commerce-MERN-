const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//create a database connection

mongoose.connect('mongodb+srv://anjanypandey06:FX4KKCufuHxTEQUy@cluster0.6uv7h.mongodb.net/')
.then(()=> console.log("MONGODB connected")).catch((err)=>
  console.log(err)
)

const app = express();
const PORT = process.env.PORT || 5000;


app.use(
  cors({
    origin: "https://localhost:5173/",
    methods : ['GET', 'POST', 'DELETE','PUT'],
    allowedHeaders : [
      'Content-Type',
      'Authorization',
      'Cache-Contol',
      'Pragma'
    ],
    credentials : true
  })
)

app.use(cookieParser);
app.use(express.json())


app.listen(PORT, ()=>{
  console.log(`Server is now running on port ${PORT}`);
})