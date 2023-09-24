import express from "express";
import jwt from "jsonwebtoken";
import { currentUser } from "../middlewares/currentUser";
import { requireAuth } from "../middlewares/requireAuth";
import { User } from "../models/user";
import { BadRequestError } from "../errors/badRequestError";
import { Holder, Statistics } from "../models/holders";
import { Acceptproject } from "../models/acceptproject";
import { Blog } from "../models/blog";

const router = express.Router();

router.get("/api/admin/getblog/:id", async (req: any, res: any) => {
  const blogId = req.params.id; // Blog ID'sini URL'den al

  const blog = await Blog.findById(blogId);

  if (!blog) {
    return res.status(404).send({ message: "Blog not found" });
  }

  res.status(200).send(blog);
});

export { router as getOneBlogRouter };
