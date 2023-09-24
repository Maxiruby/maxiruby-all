import express from "express";
import jwt from "jsonwebtoken";
import { currentUser } from "../middlewares/currentUser";
import { requireAuth } from "../middlewares/requireAuth";
import { User } from "../models/user";
import { BadRequestError } from "../errors/badRequestError";
import { Project } from "../models/projects";

const router = express.Router();

router.get(
  "/api/admin/application/:id",
  requireAuth,
  async (req: any, res: any) => {
    const admin = req.user.admin;

    if (!admin) {
      throw new BadRequestError("You are not an admin");
    }
    const application = await Project.findById(req.params.id);

    res.status(200).send({
      result: application,
    });
  }
);

export { router as getOneApplicationRouter };
