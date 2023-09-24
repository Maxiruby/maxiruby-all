import express from "express";
import jwt from "jsonwebtoken";
import { currentUser } from "../middlewares/currentUser";
import { requireAuth } from "../middlewares/requireAuth";
import { User } from "../models/user";
import { BadRequestError } from "../errors/badRequestError";
import { validateRequest } from "../middlewares/validateRequest";
import { body } from "express-validator";

const router = express.Router();

router.post(
  "/api/users/auth/update",
  requireAuth,
  [
    body("username").notEmpty().withMessage("username is required"),
    body("surname").notEmpty().withMessage("surname is required"),
  ],

  validateRequest,
  async (req: any, res: any) => {
    const userAddress = req.user.email;
    const { username, surname } = req.body;

    const user = await User.findOne({ email: userAddress });

    if (!user) {
      throw new BadRequestError("User not found");
    }

    const update = await User.findOneAndUpdate(
      { email: userAddress },
      {
        username: username,
        surname: surname,
      },
      {
        new: true,
      }
    );

    res.status(200).send({
      result: {
        user: update,
        message: "User updated",
      },
    });
  }
);

export { router as updateProfileRouter };
