
const express =require('express')
const usercontroller= require('../controllers/usercontroller')

const userRoute= express()

userRoute.post('/register',usercontroller.register)
userRoute.post('/login',usercontroller.login)
userRoute.post('/home',usercontroller.home)




module.exports=userRoute