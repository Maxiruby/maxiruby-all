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
import { Project } from "../models/projects";

const router = express.Router();

router.post("/api/admin/project/accept", async (req: any, res: any) => {
  const {
    startTime,
    endTime,
    price,
    tokenToSell,
    tokenDecimal,
    vestingStartTime,
    vestingCliffTime,
    vestingPeriod,
    enableByEther,
    enableByUsdt,
    owner,
    project_burn_address,
    project_coingecko_tokenID,
    project_coin_stats_url,
    project_image,
    project_linkedin_url,
    project_name,
    project_description,
    project_total_user,
    project_swap_rate,
    project_token_symbol,
    project_hard_cap,
    project_total_fund_participated,
    project_fcfs_open_time,
    soft_cap,
    audit_url,
    whitelist,
    tier,
    minimumPayment,
    maximumPayment,
    referans_key,
    wallet,
    project_twitter_url,
    project_telegram_url,
    project_website_url,
    project_discord_url,
    project_id,
    twitter,
    telegram,
    website,
    whitepaper,
    claim_end,
  } = req.body;
  const project = await Acceptproject.findOne({ project_name: project_name });
  if (project) {
    throw new BadRequestError("Project already exist");
  }
  var intNumber = parseInt(project_id.toString(), 16);
  const newProject = Acceptproject.build({
    startTime,
    endTime,
    price,
    tokenToSell,
    tokenDecimal,
    vestingStartTime,
    vestingCliffTime,
    vestingPeriod,
    enableByEther,
    enableByUsdt,
    owner,
    project_burn_address,
    project_coingecko_tokenID,
    project_coin_stats_url,
    project_image,
    project_linkedin_url,
    project_name,
    project_description,
    project_total_user,
    project_swap_rate,
    project_token_symbol,
    project_hard_cap,
    project_total_fund_participated,
    project_fcfs_open_time,
    soft_cap,
    audit_url,
    whitelist,
    tier,
    minimumPayment,
    maximumPayment,
    referans_key,
    wallet,
    project_twitter_url,
    project_telegram_url,
    project_website_url,
    project_discord_url,
    project_id,
    twitter,
    telegram,
    website,
    whitepaper,
    claim_end,
  });
  await newProject.save();
  await Project.findOneAndDelete({ project_name: project_name });
  res.status(201).send({
    message: "ok",
  });
});

export { router as acceptRouteProjr };
