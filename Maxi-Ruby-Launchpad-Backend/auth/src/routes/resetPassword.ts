import express from "express";
import jwt from "jsonwebtoken";
import { currentUser } from "../middlewares/currentUser";
import { requireAuth } from "../middlewares/requireAuth";
import { User } from "../models/user";
import { BadRequestError } from "../errors/badRequestError";
import { validateRequest } from "../middlewares/validateRequest";
import { body } from "express-validator";
import * as bcrypt from "bcrypt";

const router = express.Router();

router.post(
  "/api/users/auth/resetpassword",
  requireAuth,
  [body("newpassword").notEmpty().withMessage("newpassword is required")],

  validateRequest,
  async (req: any, res: any) => {
    const userAddress = req.user.email;
    const { newpassword } = req.body;

    const user = await User.findOne({ email: userAddress });

    if (!user) {
      throw new BadRequestError("User not found");
    }
    const cryptedPassword = await bcrypt.hash(newpassword, 12);
    const update = await User.findOneAndUpdate(
      { email: userAddress },
      {
        password: cryptedPassword,
      },
      {
        new: true,
      }
    );

    res.status(200).send({
      result: {
        message: "ok",
      },
    });
  }
);

export { router as resetPasswordRouter };
