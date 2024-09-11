const express = require('express');
const userMiddleware = require('../middlewares/userMiddleware');
const { PrismaClient } = require('@prisma/client');

const blogRouter = express.Router();

const prisma = new PrismaClient();

blogRouter.post("/blog" , userMiddleware, async (req,res) => {
    try {
        const { email } = req.username;
        const { title , text } = req.body;
    
        const response = await prisma.post.create({
            data : {
                title,
                text,
                author : {
                    connect : email
                }   
            },
        })
        console.log(response);
    } catch (e)  {
        res.status(500).json({
            message : "Server error!"
        })
    }
    
})

blogRouter.get("/blog/:id" , (req,res) => {
    
})

module.exports = {
    blogRouter,
}