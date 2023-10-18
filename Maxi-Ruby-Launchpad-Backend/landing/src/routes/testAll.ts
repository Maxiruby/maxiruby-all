import express from "express";
import { Acceptproject } from "../models/acceptproject";
import mongoose from "mongoose";
import { Acceptprojecttest } from "../models/acceptprojecttest";

const router = express.Router();

router.get("/api/landing/all/test", async (req: any, res: any) => {
  const now = Date.now();

  // "pause" durumunda olmayan projeleri getiriyoruz
  const projects = await Acceptprojecttest.find({ status: { $ne: "pause" } });

  const updatedProjects: any[] = [];

  const convertToMilliseconds = (timeValue: any) => {
    if (timeValue.toString().length === 10) {
      return timeValue * 1000;
    }
    return timeValue;
  };

  // ...

  for (let project of projects) {
    let shouldUpdate = false;

    const startTimeInMs = convertToMilliseconds(project.startTime);
    const endTimeInMs = convertToMilliseconds(project.endTime);

    if (
      startTimeInMs <= now &&
      endTimeInMs > now &&
      project.status !== "open"
    ) {
      project.status = "open";
      shouldUpdate = true;
    } else if (endTimeInMs <= now && project.status !== "claim") {
      project.status = "claim";
      shouldUpdate = true;
    } else if (startTimeInMs > now && project.status !== "upcoming") {
      project.status = "upcoming";
      shouldUpdate = true;
    }

    if (shouldUpdate) {
      await project.save();
      updatedProjects.push(project);
    }
  }
  // Eğer hiçbir güncelleme yapmadıysak, orijinal projeleri gönderelim
  const projectsToSend =
    updatedProjects.length > 0 ? updatedProjects : projects;

  // Projeleri belirtilen sıraya göre sırala
  function sortProjects(a: any, b: any) {
    const order = ["upcoming", "open", "claim"];
    return order.indexOf(a.status) - order.indexOf(b.status);
  }

  const sortedProjects = projectsToSend.sort(sortProjects);

  res.status(200).send({
    result: sortedProjects,
  });
});

export { router as landingsRouterTest };
