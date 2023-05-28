const express=require('express')
const router=express.Router();
const usersController=require('../controller/user.js')


router
.post('/',usersController.createUser)
.get('/',usersController.getAllUsers)
.get('/:id',usersController.getUser)
.put('/:id',usersController.replaceUser)
.patch('/:id',usersController.updateUser)
.delete('/:id',usersController.deleteUser)

exports.router=router;