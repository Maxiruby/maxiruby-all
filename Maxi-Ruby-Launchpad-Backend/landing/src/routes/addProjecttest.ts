import express from "express";
import { Tiers } from "../models/tiers";
import { requireAuth } from "../middlewares/requireAuth";
import { Acceptproject } from "../models/acceptproject";
import { Acceptprojecttest } from "../models/acceptprojecttest";

const router = express.Router();

router.post(
  "/api/landing/addproject/test",
  requireAuth,
  async (req: any, res: any) => {
    try {
      const { token, project } = req.body;

      const updateProject = await Acceptprojecttest.findByIdAndUpdate(
        project, // Bu kısım belgeyi (document) bulmak için kullanılacak ID olmalı.
        {
          $inc: { selled: Number(token) },
        },
        {
          new: true, // Bu opsiyon, işlem sonrası güncellenmiş belgenin dönmesini sağlar.
        }
      );
      res.status(200).send({
        message: "ok",
      });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
);

export { router as addProjectUsertest };
