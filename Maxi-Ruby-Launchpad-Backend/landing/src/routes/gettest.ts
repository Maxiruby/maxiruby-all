import express from "express";
import jwt from "jsonwebtoken";
import { currentUser } from "../middlewares/currentUser";
import { requireAuth } from "../middlewares/requireAuth";
import { User } from "../models/user";
import { BadRequestError } from "../errors/badRequestError";
import { Holder, Statistics } from "../models/holders";
import { Acceptproject } from "../models/acceptproject";
import { Acceptprojecttest } from "../models/acceptprojecttest";

const router = express.Router();

router.get("/api/landing/oneproject/test/:id", async (req: any, res: any) => {
  let project = await Acceptprojecttest.findById(req.params.id);

  if (!project) {
    return res.status(404).send({
      error: "Project not found",
    });
  }

  const now = Date.now();

  const convertToMilliseconds = (timeValue: any) => {
    if (timeValue.toString().length === 10) {
      return timeValue * 1000;
    }
    return timeValue;
  };

  const startTimeInMs = convertToMilliseconds(project.startTime);
  const endTimeInMs = convertToMilliseconds(project.endTime);

  let shouldUpdate = false;
  if (startTimeInMs > now && project.status !== "upcoming") {
    project.status = "upcoming";
    shouldUpdate = true;
  } else if (
    startTimeInMs <= now &&
    endTimeInMs > now &&
    project.status !== "open"
  ) {
    project.status = "open";
    shouldUpdate = true;
  } else if (endTimeInMs <= now && project.status !== "claim") {
    project.status = "claim";
    shouldUpdate = true;
  }

  if (shouldUpdate) {
    await project.save();
  }

  res.status(200).send({
    result: project,
  });
});

export { router as getOneProjecttest };
