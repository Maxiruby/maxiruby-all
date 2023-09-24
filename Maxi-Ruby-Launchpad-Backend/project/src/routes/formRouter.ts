import express from "express";
import jwt from "jsonwebtoken";
import { currentUser } from "../middlewares/currentUser";
import { requireAuth } from "../middlewares/requireAuth";
import { User } from "../models/user";
import { BadRequestError } from "../errors/badRequestError";
import { Holder, Statistics } from "../models/holders";
import { ProjectApplication } from "../models/form";

const router = express.Router();

router.post("/api/project/form", async (req: any, res: any) => {
  const {
    timestamp,
    projectName,
    desiredNetwork,
    discoverySource,
    projectDescription,
    projectStatus,
    teamVisibility,
    plannedIDOAmount,
    websiteURL,
    coingeckoLink,
    telegramAddress,
    applicantName,
    applicantEmail,
  } = req.body;

  // Yeni bir başvuru oluştur
  const application = ProjectApplication.build({
    timestamp,
    projectName,
    desiredNetwork,
    discoverySource,
    projectDescription,
    projectStatus,
    teamVisibility,
    plannedIDOAmount,
    websiteURL,
    coingeckoLink,
    telegramAddress,
    applicantName,
    applicantEmail,
  });

  // Veritabanına kaydet
  await application.save();

  // Başarılı bir şekilde kaydedildiğini dön
  res.status(201).send("ok");
});

export { router as formRouter };
