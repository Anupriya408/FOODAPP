const express = require('express')
const app = express()
const port = 5000
const mongoDB = require("./db")

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})



app.use(express.json());
app.use('/api/', require("./Routes/CreateUser"));
app.get('/', (req, res) => {
  res.send('Hello ANUPRIYA!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})