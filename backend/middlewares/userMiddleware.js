const express = require('express');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const userMiddleware = async (req,res,next) => {
    
    
    try {
        
    const sentToken = req.headers["authorization"];

    // console.log(sentToken)
    

    // console.log(req.headers["authorization"].split(" ")[1]);

    const isValid = sentToken.split(" ")[0] === "Bearer";

    if (!isValid) return res.status(400).json({ message : "Invalid token"})

    const token = sentToken.split(' ')[1];

    
        const decoded = jwt.verify(token, JWT_SECRET);

    // console.log("Decoded" + decoded)

    if (!decoded) {
        return res.status(403).json({
            messagge : "Authorization failed!"
        })
    }

    req.username = decoded;

    next();
    } catch (e) {
        console.log(sentToken)
        return res.status(500).json({
            // x : console.log(req.headers["authorization"].split(" ")[1]),
            messsage : `Internal server error\n ${e}`,
            sentToken
        })
    }
    
}

module.exports = userMiddleware;