import express from "express";
import jwt from "jsonwebtoken";
import { currentUser } from "../middlewares/currentUser";
import { requireAuth } from "../middlewares/requireAuth";
import { User } from "../models/user";
import { BadRequestError } from "../errors/badRequestError";
import { Acceptproject } from "../models/acceptproject";

const router = express.Router();

router.get("/api/users/auth", requireAuth, async (req: any, res: any) => {
  const userAddress = req.user.email;
  console.log("userAddress", userAddress);
  const aa = new Acceptproject();
  const user = await User.findOne({ email: userAddress }).populate("projects");

  if (!user) {
    throw new BadRequestError("User not found");
  }
  res.status(200).send({
    result: user,
  });
});

export { router as currentUserRouter };
