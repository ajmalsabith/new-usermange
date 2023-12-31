
const jwt= require('jsonwebtoken')
const user= require('../Models/userModel')
const { parseArgs } = require('util')
const { emit } = require('process')

const register =async (req,res)=>{
    try {

        

        const name= req.body.name
        const phone= req.body.phone
        const email= req.body.email
        const password= req.body.password
        const password2= req.body.password2

        if (password==password2) {

            const newuser= new user({
                name:name,
                phone:phone,
                email:email,
                password:password2
            })
            
            const result = await newuser.save()
    
            
    
    
            if (result) {
                res.send({
                  message:'register success'
                })
            }else{
                res.status(400).send({
                    message:"somthing wrong..!"
                })
            }
    
        }else{
            res.status(400).send({
                message:'please correct password'
            })
        }

      

        

        
    } catch (error) {
        console.log(error.message);
    }
}

const home=async(req,res)=>{

    try {

        const userdata= await user.find({})
        console.log(userdata);
        if (userdata) {
            res.send({
                data:userdata
            })
        }else{
            res.status(400).send({
                message:'somthing wrong..!'
            })
        }
    } catch (error) {
        console.log(err.message);
    }
}

const login = async(req,res)=>{
    try {

        const email= await req.body.email
        
        const password= await req.body.password
        const userdata= await user.findOne({email:email})
        if (userdata) {
            if (userdata.password==password) {
               res.send({
                message:'success'
               })
            }else{
                res.status(400).send({
                    message:'password wrong..!'
                })
            }
            
        }else{
            res.status(400).send({
                message:'email wrong..!'
            })
        }
       
    } catch (error) {
        console.log(error.message);
    }
}


const deletefu = async(req,res)=>{
    try {

        const id= await req.params.id
        
        console.log(id+'delteid');
        const userdata= await user.deleteOne({_id:id})
        if (userdata) {
           
               res.send({
                message:'success'
               })
           
            
        }else{
            res.status(400).send({
                message:' wrong..!'
            })
        }
       
    } catch (error) {
        console.log(error.message);
    }
}



module.exports={
    register,
    home,
    login,
    deletefu
}