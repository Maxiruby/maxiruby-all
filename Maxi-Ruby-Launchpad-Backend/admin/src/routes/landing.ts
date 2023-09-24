import express from "express";
import jwt from "jsonwebtoken";
import { currentUser } from "../middlewares/currentUser";
import { requireAuth } from "../middlewares/requireAuth";
import { User } from "../models/user";
import { BadRequestError } from "../errors/badRequestError";
import { Holder, Statistics } from "../models/holders";
import { Acceptproject } from "../models/acceptproject";

const router = express.Router();

router.get("/api/admin/landing", requireAuth, async (req: any, res: any) => {
  const admin = req.user.admin;

  if (!admin) {
    throw new BadRequestError("You are not an admin");
  }
  const users = await User.find();
  const holders = await Holder.find();
  const porjects = await Acceptproject.find();
  const openprojects = await Acceptproject.find({ status: "open" });
  const closedprojects = await Acceptproject.find({ status: "closed" });
  const claimedprojects = await Acceptproject.find({ status: "claim" });

  res.status(200).send({
    result: {
      users: users.length,
      holders: holders.length,
      projects: porjects.length,
      openprojects: openprojects.length,
      closedprojects: closedprojects.length,
      claimedprojects: claimedprojects.length,
    },
  });
});

export { router as landingsRouter };
