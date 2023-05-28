require('dotenv').config()
const express=require('express')
const server=express();
const morgan=require('morgan')
const mongoose=require('mongoose')
const cors=require('cors')
const path=require('path')
const productRouter=require('./routes/product.js')
const userRouter=require('./routes/user.js')

//console.log('env',process.env.DB_PASSWORD)

//db connection
main().catch(err=>console.log(err));

async function main(){
mongoose.connect(process.env.MONGO_URL)
console.log("DB connected");
}



//Middleware
//bodyparser
//server.use(express.urlencoded())
    server.use(express.json())                          //built in middleware
server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)));
//logger
//server.use(morgan('default '));
//server.use((req,res,next)=>{
//        console.log(req.method,req.ip,req.hostname,new Date(),req.get('User-Agent'))
//        next()
//})
/*
const auth=(req,res,next)=>{
    //console.log(req.query)

    if(req.body.password=='123'){
        next()
    }
    else{
        res.sendStatus(401)
    }
}
*/
    server.use(cors());
    server.use('/products',productRouter.router);
    server.use('/users',userRouter.router)

    server.use('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'build','index.html'))})


//Model-view-controller(MVC)


//API-Endpoint-Route

//Products
//API Root,base URL ,example: google.com/api/v2

//Create POST /products           // C R U D
// Read GET /products
// Read GET /products/:id
//Update PUT /products/:id
 //Update PATCH /products/:id
 //Delete DELETE /products/:id

/*
server.get('/demo',(req,res)=>{
        //res.sendStatus(404);
        //res.status(201).send("Hello")
        //res.sendFile('/Users/unicommerce/Documents/firstReact/express-app/data.json')
        //res.json(p)
})
*/


server.listen(8080,()=>{
    console.log("server started")
});


