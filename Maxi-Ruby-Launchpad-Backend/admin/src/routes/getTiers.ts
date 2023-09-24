import express from "express";
import { Tiers } from "../models/tiers";

const router = express.Router();

router.get("/api/admin/gettiers/:id", async (req: any, res: any) => {
  // İlk Tiers kaydını çekiyoruz
  const tiers = await Tiers.findOne();

  // Eğer Tiers kaydı yoksa 404 hata kodu dönüyoruz
  if (!tiers) {
    return res.status(400).send({ error: "Tiers not found" });
  }

  // Tiers bilgilerini yanıtlıyoruz
  res.status(200).send({
    result: {
      tier_one: tiers.tier_one,
      tier_two: tiers.tier_two,
      tier_three: tiers.tier_three,
      tier_four: tiers.tier_four,
      tier_five: tiers.tier_five,
    },
  });
});

export { router as getTiersRouter };
