import express from "express";
import { Tiers } from "../models/tiers";

const router = express.Router();

router.get("/api/landing/tierlist/:id", async (req: any, res: any) => {
  try {
    // Tiers koleksiyonundan tek kaydı çekiyoruz
    const tiers = await Tiers.findOne();
    console.log(tiers);

    // Eğer kayıt yoksa 404 hata kodu dönüyoruz
    if (!tiers) {
      return res.status(400).send({ error: "Tiers not found" });
    }

    const combinedTiers: string[] = tiers.tier_one.concat(
      tiers.tier_two,
      tiers.tier_three,
      tiers.tier_four,
      tiers.tier_five
    );

    res.status(200).send({
      result: combinedTiers,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).send({
      error: error.message,
    });
  }
});

export { router as getTierListRouter };
