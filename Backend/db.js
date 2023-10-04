const mongoose = require('mongoose');
// mongoURI =  "mongodb+srv://username:password@devconnector.jpokp.mongodb.net/dbname?retryWrites=true&w=majority" 

// mongoose .connect(mongoURI, { useNewUrlParser: true }) .then(() => console.log("MongoDB connected")) .catch((err) => console.log(err));

const mongoURI= 'mongodb+srv://anupriyasinha0408:ANU@08@cluster0.ub0l4hz.mongodb.net/GOFOOD?retryWrites=true&w=majority'

const mongoDB = async() => {
    await mongoose.connect(mongoURI,() => {
        
              console.log("connected");
              const fetched_data= mongoose.connection.db.collection("sample");
              fetched_data.find({}).toArray( function(err, data) {
                if(err) console.log(err);
                else console.log(data)
              })
    
    });
}



module.exports = mongoDB();