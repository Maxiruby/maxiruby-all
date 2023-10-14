import express from "express";
import jwt from "jsonwebtoken";
import { currentUser } from "../middlewares/currentUser";
import { requireAuth } from "../middlewares/requireAuth";
import { User } from "../models/user";
import { BadRequestError } from "../errors/badRequestError";
import { validateRequest } from "../middlewares/validateRequest";
import { body } from "express-validator";
import sendVerificationEmail from "../helpers/mailler";
import generateToken from "../helpers/tokens";

const router = express.Router();

router.post(
  "/api/users/auth/sendeverify",
  requireAuth,
  async (req: any, res: any) => {
    try {
      const id = req.user.id;
      const user: any = await User.findById(id);
      if (user.verified === true) {
        return res.status(400).json({
          message: "This account is already activated.",
        });
      }
      const emailVerificationToken = generateToken(
        { id: user._id.toString(), email: user.email },
        "30m"
      );
      const url = `https://maxiruby.com/activate/${emailVerificationToken}`;
      sendVerificationEmail(user.email, user.email, url);
      return res.status(200).json({
        message: "Email verification link has been sent to your email.",
      });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
);

export { router as sendVerificationEmailRouter };
