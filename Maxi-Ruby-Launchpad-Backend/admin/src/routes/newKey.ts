import express from "express";
import jwt from "jsonwebtoken";
import { currentUser } from "../middlewares/currentUser";
import { requireAuth } from "../middlewares/requireAuth";
import { User } from "../models/user";
import { BadRequestError } from "../errors/badRequestError";
import { Holder, Statistics } from "../models/holders";
import { validateRequest } from "../middlewares/validateRequest";
import { body } from "express-validator";
import { generetaeRefOnekey } from "../helpers/refkey";
import { Keys } from "../models/refkeys";

const router = express.Router();

router.post(
  "/api/admin/key",
  [body("wallet").notEmpty().withMessage("wallet is required")],
  validateRequest,
  async (req: any, res: any) => {
    console.log("burda");

    const { wallet } = req.body;
    const key = await generetaeRefOnekey();
    console.log("key", key);

    const newKey = Keys.build({
      wallet: wallet,
      key: key,
    });
    await newKey.save();
    console.log("son");

    res.status(200).json({
      message: "key created",
      key: key,
    });
  }
);

export { router as newKeydRouter };
