const express = require('express');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const userMiddleware = async (req,res,next) => {
    const sentToken = req.headers["authorization"];
    

    // console.log(req.headers["authorization"].split(" ")[1]);

    const token = sentToken.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);

    console.log(decoded)

    if (!decoded) {
        return res.status(403).json({
            messagge : "Authorization failed!"
        })
    }

    req.username = decoded.userId;

    next();
    } catch (e) {
        return res.status(500).json({
            messsage : `Internal server error\n ${e}`
        })
    }
    
}

module.exports = userMiddleware;