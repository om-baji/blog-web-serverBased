const { JWT_SECRET } = require("../config/config");
const express = require("express");
const jwt = require("jsonwebtoken");
const z = require("zod");
const { PrismaClient } = require("@prisma/client");
const userMiddleware = require("../middlewares/userMiddleware");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

const userRouter = express.Router();

userRouter.get("/delete", async (req, res) => {
  try {
    const deleteUsers = await prisma.user.deleteMany({});

    console.log(deleteUsers);
    res.json({
      message: "Deleted succesfully!",
    });
  }
  catch (e) {
    return res.status(500).json({
      message : "Internal server error!"
    })
  }
  
});

userRouter.get("/signin", async (req, res) => {
  const { email, password } = req.body;

  const signUpBody = z.object({
    email: z.string().email(),
    password: z.string(),
  });

  try {
    const { success } = signUpBody.safeParse({
      email,
      password,
    });
  
    if (!success) {
      return res.status(403).json({
        message: "Invalid inputs!!",
      });
    }
  
    const response = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  
  
    if (!response) return res.json({ message : "User does not exist!"})
  
    const isValid = await bcrypt.compare(password, response.password);
  
    if (!isValid) return res.json({ message : "Incorrect password!"})
  
    // console.log(response);
  
    const token = jwt.sign({ userId: response.id, email: response.email }, JWT_SECRET);
    return res.json({
      message: "Login Succesfull!",
      token,
    });
  } catch (e) {
    return res.status(500).json({
      message : "Something went wrong!"
    })
  }
  
});

userRouter.post("/signup", async (req, res) => {

  const { name, email, password } = req.body;

  const signUpBody = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
  });

  const { success } = signUpBody.safeParse({
    name,
    email,
    password,
  });

  if (!success) {
    return res.status(403).json({
      message: "Invalid inputs!!",
    });
  }

  try {

    const hashedPass = await bcrypt.hash(password,10);

  // console.log(hashedPass);

  const response = await prisma.user.create({
    data: {
      name,
      email,
      password : hashedPass,
    },
  });

  console.log(response);
  const token = jwt.sign({ userId: response.id, email: response.email }, JWT_SECRET);
  return res.json({
    message: "User created Succesfully!!",
    token
  });
  } catch (e) {
      return res.status(405).json({
        message : "User already exists or internal server error!"
      })
  }
});

userRouter.post("/blog", userMiddleware, async (req, res) => {
  try {

    const { userId } = req.username;
    const { title, text } = req.body;

    // console.log("Extracted " + userId)

    const userName = await prisma.user.findUnique({
      where : {
        id : userId
      }
    })

    // console.log(userName.name)

    const response = await prisma.post.create({
      data: {
        title,
        text,
        author : userName.name,
        authorId: userId 
      },
    });

    // console.log(response.id);

    console.log({
      name : userName.name,
      id : response.id
    })

    return res.json({
      message: "Post created successfully!",
      post: response,
    });
  } catch (e) {
    return res.status(500).json({
      message: `Server error!\n ${e.message}`,
    });
  }
});


module.exports = {
  userRouter,
};
