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
import { Project } from "../models/projects";

const router = express.Router();

router.post("/api/admin/project/delete", async (req: any, res: any) => {
  const { id } = req.body;
  const project = await Project.findByIdAndDelete(id);

  res.status(200).send({
    message: "ok",
  });
});

export { router as deleteProjectRouter };
