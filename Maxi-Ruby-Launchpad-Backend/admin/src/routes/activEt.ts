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

router.post("/api/admin/project/activeet", async (req: any, res: any) => {
  const { project_name } = req.body;

  const project = await Acceptproject.findOneAndUpdate(
    { project_name: project_name },
    { $set: { status: "upcoming" } },
    { new: true } // Bu opsiyon güncellenen belgeyi döndürür
  );

  if (!project) {
    return res.status(404).send({
      error: "Project not found",
    });
  }

  res.status(201).send({
    message: "Project paused successfully",
    project: project, // Güncellenmiş projeyi yanıt olarak göndermek isterseniz
  });
});

export { router as activeEtRouter };
