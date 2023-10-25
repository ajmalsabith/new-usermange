const express= require('express')
const app= express()
const mongoose= require('mongoose')

const cors= require('cors')


app.use(express.json())
app.use(cors({
    origin:['http://localhost:4200']
}))

const userroute= require('../backend/router/userRouter')

app.use('',userroute)

mongoose.connect('mongodb://127.0.0.1:27017/newuserManagement').then(()=>{
    console.log('database connected ');
})
app.listen(4000,()=>{
    console.log('server started')
})


