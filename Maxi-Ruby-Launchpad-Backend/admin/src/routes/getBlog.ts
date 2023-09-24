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

router.get("/api/admin/blog", async (req: any, res: any) => {
  // Blogları oluşturma tarihine göre en yeniden en eskiye sırala
  const blogs = await Blog.find().sort({ createdAt: -1 });

  res.status(200).send(blogs);
});

export { router as gettBlogsRouter };
