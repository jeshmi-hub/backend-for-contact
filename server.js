require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const errorHandler = require('./middleware/errorHandler');



const app = express();

const port = process.env.PORT || 8000;
app.use(express.json());
app.use("/api/contacts", require('./routes/contactRoute'));
app.use("/api/user", require('./routes/userRoutes'));
app.use(errorHandler);

mongoose.connect(
    process.env.DBCONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true }
    ,).then(()=> console.log('connected to database')).
    catch((err)=> {console.error(err)});
   
  




app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
})