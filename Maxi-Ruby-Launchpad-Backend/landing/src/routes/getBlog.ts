import express from "express";

import { Blog } from "../models/blog";

const router = express.Router();

router.get("/api/landing/blog", async (req: any, res: any) => {
  // Blogları oluşturma tarihine göre en yeniden en eskiye sırala
  const blogs = await Blog.find().sort({ createdAt: -1 });

  res.status(200).send({
    result: blogs,
  });
});

export { router as gettBlogsRouter };
