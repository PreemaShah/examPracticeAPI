const express = require('express');
const bodyparser=require('body-parser');
const route=require('./route');
const app=express();
app.use(bodyparser.json());
route.route(app);
app.listen(3000,()=>{
    console.log("Port started at 3000");
});