import express from "express";

import { Blog } from "../models/blog";

const router = express.Router();

router.get("/api/landing/blogone/:id", async (req: any, res: any) => {
  const blogId = req.params.id; // Blog ID'sini URL'den al

  const blog = await Blog.findById(blogId);

  if (!blog) {
    return res.status(404).send({ message: "Blog not found" });
  }

  res.status(200).send({
    result: blog,
  });
});

export { router as getOneBlogRouter };
