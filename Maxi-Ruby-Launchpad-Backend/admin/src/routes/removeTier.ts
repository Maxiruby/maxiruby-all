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
import { Acceptproject } from "../models/acceptproject";

const router = express.Router();

router.post(
  "/api/admin/removetier",
  [
    body("wallet").notEmpty().withMessage("wallet is required"),
    body("tier").notEmpty().withMessage("tier is required"),
    body("id").notEmpty().withMessage("id is required"),
  ],
  validateRequest,
  async (req: any, res: any) => {
    const { wallet, tier, id } = req.body;

    let fieldToUpdate = {};
    switch (tier) {
      case 1:
        fieldToUpdate = { tier_one: wallet };
        break;
      case 2:
        fieldToUpdate = { tier_two: wallet };
        break;
      case 3:
        fieldToUpdate = { tier_three: wallet };
        break;
      case 4:
        fieldToUpdate = { tier_four: wallet };
        break;
      case 5:
        fieldToUpdate = { tier_five: wallet };
        break;
      default:
        return res.status(400).json({ message: "Invalid tier value" });
    }

    const removeTier = await Acceptproject.findByIdAndUpdate(
      id,
      {
        $pull: fieldToUpdate,
      },
      { new: true }
    );

    return res.status(200).json({ message: "ok" });
  }
);

export { router as removeTierRouter };
