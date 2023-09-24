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
  "/api/users/auth/project",
  requireAuth,
  [body("project").notEmpty().withMessage("project is required")],

  validateRequest,
  async (req: any, res: any) => {
    const userAddress = req.user.email;
    const { project } = req.body;

    const user = await User.findOne({ email: userAddress });

    if (!user) {
      throw new BadRequestError("User not found");
    }
    try {
      // Eğer cüzdan mevcut değilse, önce tüm cüzdanların isActive değerlerini false yapalım.

      // Ardından yeni cüzdanı ekleyelim ve onun isActive değerini true yapalım.
      await User.updateOne(
        { email: userAddress },
        {
          $push: {
            projects: project,
          },
        }
      );

      res.status(200).send({
        result: {
          message: "Project added successfully",
        },
      });
    } catch (error: any) {
      return res.status(400).send({ error: error.message });
    }
  }
);

export { router as addPorjectRouter };
