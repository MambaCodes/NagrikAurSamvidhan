import mongoose from "mongoose";

const connect = async()=>{
   try{
     await mongoose.connect("mongodb+srv://rishurawat1703:<db_password>@cluster0.zuirt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {useNewUrlParser: true, useUnifiedTopology: true});
     console.log("Connected to MongoDB");
   }
   catch(e){
     console.error("Failed to connect to MongoDB", e);
     process.exit(1);
   }
};