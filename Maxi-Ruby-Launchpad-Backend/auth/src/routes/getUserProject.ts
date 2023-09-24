import express from "express";
import jwt from "jsonwebtoken";
import { currentUser } from "../middlewares/currentUser";
import { requireAuth } from "../middlewares/requireAuth";
import { User } from "../models/user";
import { BadRequestError } from "../errors/badRequestError";

const router = express.Router();

router.get("/api/users/auth", requireAuth, async (req: any, res: any) => {
  const userAddress = req.user.email;
  console.log("userAddress", userAddress);

  const user = await User.findOne({ email: userAddress });

  if (!user) {
    throw new BadRequestError("User not found");
  }
  const result = await User.findOne({ email: userAddress }).populate("Acceptproject")
  res.status(200).send({
    result: user,
  });
});

export { router as currentUserRouter };
