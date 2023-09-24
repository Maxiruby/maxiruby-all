import express from "express";
import jwt from "jsonwebtoken";
import { currentUser } from "../middlewares/currentUser";
import { requireAuth } from "../middlewares/requireAuth";
import { User } from "../models/user";
import { BadRequestError } from "../errors/badRequestError";
import { validateRequest } from "../middlewares/validateRequest";
import { body } from "express-validator";
import getTier from "../helpers/getTier";

const router = express.Router();

router.post(
  "/api/users/auth/wallet",
  requireAuth,
  [body("wallet").notEmpty().withMessage("wallet is required")],

  validateRequest,
  async (req: any, res: any) => {
    const userAddress = req.user.email;
    const { wallet } = req.body;
    console.log(wallet, userAddress);

    const user = await User.findOne({ email: userAddress });

    if (!user) {
      throw new BadRequestError("User not found");
    }
    try {
      const matchingAddress = wallet;



      // Öncelikle eşleşen cüzdanın olup olmadığını kontrol edelim.
      const existingUser = await User.findOne({
        email: userAddress,
        "wallets.address": matchingAddress,
      });

      if (existingUser) {
        // Eğer eşleşen cüzdan mevcutsa, önce tüm cüzdanların isActive değerlerini false yapalım.
        await User.updateOne(
          { email: userAddress },
          {
            $set: {
              "wallets.$[].isActive": false,
            },
          }
        );

        // Ardından sadece eşleşen cüzdanın isActive değerini true yapalım.
        await User.updateOne(
          {
            email: userAddress,
            "wallets.address": matchingAddress,
          },
          {
            $set: {
              "wallets.$.isActive": true,
            },
          }
        );
      } else {
        // Eğer cüzdan mevcut değilse, önce tüm cüzdanların isActive değerlerini false yapalım.
        await User.updateOne(
          { email: userAddress },
          {
            $set: {
              "wallets.$[].isActive": false,
            },
          }
        );

        // Ardından yeni cüzdanı ekleyelim ve onun isActive değerini true yapalım.
        await User.updateOne(
          { email: userAddress },
          {
            $push: {
              wallets: {
                address: matchingAddress,
                isActive: true,
              },
            },
          }
        );
      }
      const userTier = await getTier(wallet);
      if(userTier) {
          await User.updateOne({ email: userAddress }, { tier: userTier });
      }
      res.status(200).send({
        result: {
          message: "Wallet added successfully",
        },
      });
    } catch (error: any) {
      return res.status(400).send({ error: error.message });
    }
  }
);

export { router as addWalletRouter };
