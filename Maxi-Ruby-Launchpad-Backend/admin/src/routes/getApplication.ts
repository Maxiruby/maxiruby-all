import express from "express";
import jwt from "jsonwebtoken";
import { currentUser } from "../middlewares/currentUser";
import { requireAuth } from "../middlewares/requireAuth";
import { User } from "../models/user";
import { BadRequestError } from "../errors/badRequestError";
import { Project } from "../models/projects";

const router = express.Router();

router.get(
  "/api/admin/application",
  requireAuth,
  async (req: any, res: any) => {
    const admin = req.user.admin;
    console.log("admin", admin);

    if (!admin) {
      throw new BadRequestError("You are not an admin");
    }
    const users = await Project.find().sort({ _id: -1 }).exec();
    res.status(200).send({
      result: users,
    });
  }
);

export { router as getAllApplicationRouter };
