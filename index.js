const express=require('express');
const app = express();
require('./models/DbConfig');
const postsRoutes= require('./routes/postsController');
const bodyParser = require('body-parser');
const mongoose =require('mongoose');

mongoose.set('useFindAndModify',false);

app.use(bodyParser.json());
app.use('/posts',postsRoutes);

app.listen(5500,()=>console.log("server started..."));