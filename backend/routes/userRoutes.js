const { JWT_SECRET } = require('../config/config');
const express = require('express');
const jwt = require('jsonwebtoken');
const z = require('zod');
const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

const userRouter = express.Router();

userRouter.get("/signin", (req,res) => {
    const { email, password } = req.body;

    const signUpBody = z.object({
        email : z.string().email(),
        password : z.string()
    })

    const { success } = signUpBody.safeParse({
        email,
        password
    })

    if (!success ){
        return res.status(403).json({
            message : "Invalid inputs!!"
        })
    }

    

    const token = jwt.sign(password, JWT_SECRET)
    return res.json({
        message : "Login Succesfull!",
        token
    })
})

userRouter.post("/signup", async (req,res) => {

    const { name, email, password } = req.body;

    const signUpBody = z.object({
        name : z.string(),
        email : z.string().email(),
        password : z.string()
    })

    const { success } = signUpBody.safeParse({
        name,
        email,
        password
    })

    if (!success ){
        return res.status(403).json({
            message : "Invalid inputs!!"
        })
    }

    const response = await prisma.user.create({
        data : {
            name,
            email,
            password
        }
    })
    
    console.log(response);
    const token = jwt.sign(password, JWT_SECRET)
    return res.json({
        message : "User created Succesfully!!",
        token
    })

})

module.exports ={
    userRouter,
} 