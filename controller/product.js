/*
const fs=require('fs')
const i=fs.readFileSync('index.html','utf-8')
const i1=JSON.parse(fs.readFileSync('data.json','utf-8'))
const products=i1.products;
*/

const model=require('../models/product')
const Product=model.Product

exports.createProduct=async(req,res)=>{
     
   /*
    console.log(req.body)
    products.push(req.body)
    */
   const product=new Product(req.body)
  await product.save()
  .then((re)=>{
      res.status(201).json(re)
  })
  .catch((err)=>{
   res.status(400).json(err)
  })
    
 }

 exports.getAllProduct=async(req,res)=>{
   const products=await Product.find()
    res.json(products)
 }

 exports.getProduct=async(req,res)=>{
    const id=req.params.id;
    const products=await Product.findById(id)
    //const product=products.find(p=>p.id===id)
    res.json(products)
 }

 exports.replaceProduct=async(req,res)=>{
    const id=req.params.id
    //const productIndex=products.findIndex(p=>p.id===id)
    //products.splice(productIndex,1,{...req.body,id:id})
      try{
         const pro=await Product.findOneAndReplace({_id:id},req.body,{new:true})
         res.status(200).json(pro)
      }
      catch(err){
         console.log(err)
         res.status(400).json()
      }
   }

 exports.updateProduct=async (req,res)=>{
   const id=req.params.id
    //const productIndex=products.findIndex(p=>p.id===id)
    //const product=products[productIndex]
    //products.splice(productIndex,1,{...product,...req.body})
    //res.status(201).json()
   
    try{
      const pro=await Product.findOneAndUpdate({_id:id},req.body,{new:true})
      res.status(200).json(pro)
   }
   catch(err){
      console.log(err)
      res.status(400).json()
   }
 }

 exports.deleteProduct=async(req,res)=>{
    const id=req.params.id
    //const productIndex=products.findIndex(p=>p.id===id)
    //const product=products[productIndex]
    //products.splice(productIndex,1)
    //res.status(201).json(product)
    try{
      const pro=await Product.findOneAndDelete({_id:id})
      res.status(200).json(pro)
   }
   catch(err){
      console.log(err)
      res.status(400).json()
   }
 }