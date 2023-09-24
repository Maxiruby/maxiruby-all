import express from "express";
import jwt from "jsonwebtoken";
import { currentUser } from "../middlewares/currentUser";
import { requireAuth } from "../middlewares/requireAuth";
import { User } from "../models/user";
import { BadRequestError } from "../errors/badRequestError";
import { Holder, Statistics } from "../models/holders";
import { validateRequest } from "../middlewares/validateRequest";
import { body } from "express-validator";
import { generetaeRefOnekey } from "../helpers/refkey";
import { Keys } from "../models/refkeys";
import { Acceptproject } from "../models/acceptproject";
import { Blog } from "../models/blog";

const router = express.Router();

router.post(
  "/api/admin/blog",
  [
    body("title").not().isEmpty().withMessage("Title is required"),
    body("image").not().isEmpty().withMessage("Image is required"),
    body("text").not().isEmpty().withMessage("Text is required"),
    body("tags").isArray().withMessage("Tags must be an array"),
  ],
  validateRequest,
  async (req: any, res: any) => {
    const { title, image, text, tags } = req.body;

    const blog = Blog.build({
      title,
      image,
      text,
      tags,
    });

    await blog.save();

    res.status(201).send(blog);
  }
);

export { router as addBlogRouter };
