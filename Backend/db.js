const mongoose = require('mongoose');
// mongoURI =  "mongodb+srv://username:password@devconnector.jpokp.mongodb.net/dbname?retryWrites=true&w=majority" 


const mongoURI = "mongodb+srv://anupriyasinha0408:ANU%4008@cluster0.ub0l4hz.mongodb.net/GOFOOD"
const port = process.env.PORT || 5000;
mongoose.set('strictQuery', false);

const mongoDB = async()=>{
await mongoose.connect(mongoURI,async(err,result) => {

  if(err) console.log("find error",err)
  else{
     console.log("connected");

     const fetched_data= await mongoose.connection.db.collection("sample");
     fetched_data.find({}).toArray(function(err,data){
      if(err) console.log(err);
      else console.log(); /// data
     })
  }
})
}
module.exports = mongoDB();