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
import { Tiers } from "../models/tiers";

const router = express.Router();
router.post(
  "/api/admin/addtier",
  [
    body("wallet").notEmpty().withMessage("wallet is required"),
    body("tier").notEmpty().withMessage("tier is required").isInt({ min: 1, max: 5 }),
  ],
  validateRequest,
  async (req: any, res: any) => {
    const { wallet, tier } = req.body;

    const tierFields = {
      1: 'tier_one',
      2: 'tier_two',
      3: 'tier_three',
      4: 'tier_four',
      5: 'tier_five'
    };

    if ((tierFields as any)[tier]) {
      const updateField: { [key: string]: string } = {};
      updateField[(tierFields as any)[tier]] = wallet;

      const existingTier = await Tiers.findOne();
      if (!existingTier) {
        const newTier = new Tiers();
        (newTier as any)[(tierFields as any)[tier]] = [wallet];
        await newTier.save();
      } else {
        await Tiers.updateOne({}, {
          $push: updateField
        });
      }
      return res.status(200).json({ message: "ok" });
    } else {
      return res.status(400).json({ message: "Invalid tier value" });
    }
  }
);

export { router as addtierRouter };
