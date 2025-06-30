const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");

const adminRoute = require("./router/admin-router")
// const mongoose = require("mongoose");

const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
// const services = require("./controllers/service-controller");
const serviceRoute = require("./router/service-router")

const corsOptions={
  origin: "https://verdant-tiramisu-237bee.netlify.app/", // Adjust this to your frontend URL
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD", // Specify allowed methods
  credentials: true, // Allow credentials if needed
}

app.use(cors(corsOptions));

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data",serviceRoute)



// admin route
app.use("/api/admin",adminRoute);



 



app.use(errorMiddleware);

const PORT =5000; 

connectDB().then(()=>{
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
})
  
