import express from "express";
import jwt from "jsonwebtoken";
import { currentUser } from "../middlewares/currentUser";
import { requireAuth } from "../middlewares/requireAuth";
import { User } from "../models/user";
import { BadRequestError } from "../errors/badRequestError";
import { validateRequest } from "../middlewares/validateRequest";
import { body } from "express-validator";

const router = express.Router();

router.post("/api/users/auth/activate", async (req: any, res: any) => {

  // if (!chekcUser) {
  //   return res.status(400).send({
  //     message: "User not found",
  //   });
  // }
  // if (chekcUser.verify) {
  //   return res.status(400).send({
  //     message: "User already activated",
  //   });
  // }
  // await User.findByIdAndUpdate(chekcUser._id, { verify: true }, { new: true });
  return res.status(200).send({
    message: "User activated",
    // user: chekcUser,
  });
});

export { router as activateUserRouter };
