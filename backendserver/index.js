const express = require('express');
const { dbConnection } = require('./utils/dbConncetion');
const Port = 3000;
const bodyParser = require('body-parser')
const userRoutes = require('./routes/userRoutes')

const app = express();

//middlewares

app.use(bodyParser());
//Db conncetion 
dbConnection("mongodb+srv://Ammannaidu:EmRb80Qcq01HzgX9@cluster0.ulqbe.mongodb.net/StyleStride")


app.get('/',(req,res)=>{
    res.status(200).json({'message':'Server started'})
});
app.use('/user', userRoutes);

app.listen(Port,
     ()=>{console.log(`Server Started at http://localhost:${Port}`)});
