
const express =require('express')
const usercontroller= require('../controllers/usercontroller')

const userRoute= express()

userRoute.post('/register',usercontroller.register)
userRoute.post('/login',usercontroller.login)
userRoute.get('/home',usercontroller.home)
userRoute.delete('/delete/:id',usercontroller.deletefu)




module.exports=userRoute