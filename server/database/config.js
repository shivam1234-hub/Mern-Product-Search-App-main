const mongoose=require('mongoose');



const connectDB=async()=>{

   

    try{
        const conn=await mongoose.connect('',({
                useNewUrlParser: true,
                useUnifiedTopology: true,
        }));

       console.log(`MongoDB Connected: ${conn.connection.host}`)
    }
    catch(err){

        console.log(err);
        process.exit(1)
    
    
    }

}

module.exports=connectDB;
