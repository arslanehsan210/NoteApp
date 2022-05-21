const express = require('express');
const path = require('path');
const dotenv = require("dotenv");
const notes = require('../frontend/noteapp/src/data');
const  connectDB  = require('./config/db');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const userRoutes = require('./router/userRoutes');
const noteRoutes = require('./router/noteRoutes');

dotenv.config;
connectDB();


const PORT = process.env.PORT || 5000;
const NODE_ENV =  process.env.NODE_ENV || "production";
const app = express();
app.use(express.json());


app.use('/api/users',userRoutes);
app.use('/api/notes',noteRoutes);





/////         deploy app 


__dirname = path.resolve();
if(NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"/frontend/noteapp/build")))

    // server for all routes except our define routes
    app.get('*' ,(req,res)=>{
        res.sendFile(path.resolve(__dirname,'frontend','noteapp','build','index.html'))
    })
}else{
    app.get('/',(req,res)=>{
        res.send('aoi is running')
    })
}

// seacrh a single specific item use find
// app.get('/api/notes/:id',(req,res)=>{

// const note = notes.find((n)=> n._id === req.params.id)
//     res.send(note);
// });

app.use(notFound);
app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`Example app listening at http://localhost:${PORT}`)
});


 