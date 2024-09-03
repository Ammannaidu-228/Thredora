const express = require('express');
const { dbConnection } = require('./utils/dbConncetion');
const Port = 3000;
const bodyParser = require('body-parser')
const userRoutes = require('./routes/userRoutes')
const adminProductRoutes = require('./routes/adminProductRoutes')
const adminRoutes = require('./routes/adminRoutes')
const cartItemRoutes = require('./routes/cartItemsRoutes')
const cartRoutes = require('./routes/cartRoutes')
const orderRoutes = require('./routes/orderRoutes')
const productRoutes = require('./routes/productRoutes')
const ratingRoutes = require('./routes/ratingRoutes')
const reviewRoutes = require('./routes/reviewRoutes')
const app = express();

//middlewares

app.use(bodyParser());
//Db conncetion 
dbConnection("mongodb+srv://Ammannaidu:EmRb80Qcq01HzgX9@cluster0.ulqbe.mongodb.net/StyleStride")


app.get('/',(req,res)=>{
    res.status(200).json({'message':'Server started'})
});
app.use('/user', userRoutes);
app.use('/admin', adminRoutes);
app.use('/admin/products', adminProductRoutes);
app.use('/cart-items', cartItemRoutes);
app.use('/cart', cartRoutes)
app.use('/order', orderRoutes)
app.use('/products', productRoutes)
app.use('/ratings', ratingRoutes)
app.use('/reviews', reviewRoutes)

app.listen(Port,
     ()=>{console.log(`Server Started at http://localhost:${Port}`)});
