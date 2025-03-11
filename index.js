const express = require('express');
const app = express(); 
const ProductRoute = require("./routes/product.route");
const mongoose = require("mongoose");
   
//middle wares
app.use(express.json()); 

//routes
app.use("/api/products", ProductRoute);
    
mongoose.connect("-----ConnectionString-----")
.then( () =>{
    console.log("Connected To Database Successfully") 
    app.listen(3000, () => {
        console.log("Using Port Number 3000");
    });
} ).catch(() => console.log("Connection Failed") );
