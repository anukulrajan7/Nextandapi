import mongoose from "mongoose";

export async function connect (){
  try{
      mongoose.connect(process.env.MONGO_URI!);
      const connection = mongoose.connection;
      connection.on("connected",()=>{ console.log("Connection")});
      connection.on("error",()=>{ console.log("error")
       process.exit();
    } );


  }catch(err){
    console.log(err)
  }
   

}