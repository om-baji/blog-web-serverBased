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
  } catch (e) {
    return res.status(500).json({
      message: "Internal server error!",
    });
  }
});

userRouter.post("/signin", async (req, res) => {
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
        flag: false,
      });
    }

    const response = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!response)
      return res.status(403).json({ message: "User does not exist!" });

    const isValid = await bcrypt.compare(password, response.password);

    if (!isValid)
      return res.status(403).json({ message: "Incorrect password!" });


    const token = jwt.sign(
      { userId: response.id, email: response.email },
      JWT_SECRET
    );
    return res.json({
      message: "Login Succesfull!",
      token,
    });
  } catch (e) {
    return res.status(500).json({
      message: "Something went wrong!",
    });
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
    const hashedPass = await bcrypt.hash(password, 10);


    const response = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPass,
      },
    });

    console.log(response);
    const token = jwt.sign(
      { userId: response.id, email: response.email },
      JWT_SECRET
    );
    return res.json({
      message: "User created Succesfully!!",
      token,
    });
  } catch (e) {
    return res.status(405).json({
      message: "User already exists or internal server error!",
    });
  }
});

userRouter.post("/blog", userMiddleware, async (req, res) => {
  try {
    const { userId } = req.username;
    const { title, text } = req.body;


    const userName = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    const response = await prisma.post.create({
      data: {
        title,
        text,
        author: userName.name,
        authorId: userId,
      },
    });


    console.log({
      name: userName.name,
      id: response.id,
    });

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

userRouter.get("/blog/:blogId", userMiddleware, async (req, res) => {
  try {
    const { blogId } = req.params;
    // console.log(blogId)
    const { userId } = req.username;

    // console.log(userId)

    const userName = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (!userName) return res.status(405).json({ message: "Not Found" });

    const blog = await prisma.post.findFirst({
      where: {
        Sr_no: parseInt(blogId),
      },
    });

    // console.log(blog)

    return res.status(200).json({
      blog,
    });
  } catch (e) {
    return res.status(500).json({
      message: "Internal server error!",
      error: e.message,
    });
  }
});

userRouter.post("/blogs", userMiddleware, async (req, res) => {
  try {
    const blogs = await prisma.post.findMany({});

    res.status(200).json({
      blogs,
    });
  } catch (e) {
    res.status(500).json({
      message: "Internal server error!",
    });
  }
});

userRouter.put("/blog/:blogId", userMiddleware, async (req, res) => {
  try {
    const { blogId } = req.params;

    const { title, text } = req.body;

    const blog = await prisma.post.findFirstOrThrow({
      where: {
        Sr_no: parseInt(blogId),
      },
    });

    // console.log(blog)

    const updatedBlog = await prisma.post.update({
      where: {
        id: blog.id,
      },
      data: {
        title,
        text,
      },
    });

    // console.log(updatedBlog)

    return res.json({
      message: "Updated",
      updatedBlog,
    });
  } catch (e) {
    return res.status(500).json({
      message: "Internal server error!",
      error: e,
    });
  }
});

module.exports = {
  userRouter,
};
