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
router.post("/api/admin/project/update", async (req: any, res: any) => {
  const { id, end_time, start_time } = req.body;

  // Projeyi ID'ye göre bul
  const project = await Acceptproject.findById(id);

  // Eğer proje yoksa, hata fırlat
  if (!project) {
    throw new BadRequestError("Project not found");
  }

  // Proje varsa, end_time ve start_time değerlerini güncelle
  project.endTime = end_time;
  project.startTime = start_time;
  await project.save(); // Güncellemeleri kaydet

  res.status(201).send({
    message: "Project updated successfully",
  });
});

export { router as updateProjectRouer };
