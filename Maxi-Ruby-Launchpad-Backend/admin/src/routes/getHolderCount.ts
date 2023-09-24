import express from "express";
import jwt from "jsonwebtoken";
import { currentUser } from "../middlewares/currentUser";
import { requireAuth } from "../middlewares/requireAuth";
import { Holder } from "../models/holders";
import { BadRequestError } from "../errors/badRequestError";

const router = express.Router();

router.get("/api/admin/holders", requireAuth, async (req: any, res: any) => {
  const admin = req.user.admin;
  console.log("admin", admin);

  if (!admin) {
    throw new BadRequestError("You are not an admin");
  }
  const users = await Holder.find();
  res.status(200).send({
    result: users,
  });
});

export { router as getAllHolderRouter };
