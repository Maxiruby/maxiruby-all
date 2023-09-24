import express from "express";

import { body } from "express-validator";
import { validateRequest } from "../middlewares/validateRequest";
import { Project } from "../models/projects";

const router = express.Router();

router.post(
  "/api/project/new",
  [
    body("startTime").isNumeric().withMessage("startTime must be a number"),
    body("endTime").isNumeric().withMessage("endTime must be a number"),
    body("price").notEmpty().withMessage("price is required"),
    body("tokenToSell").notEmpty().withMessage("tokenToSell is required"),
    body("tokenDecimal").notEmpty().withMessage("tokenDecimal is required"),
    body("vestingStartTime")
      .isNumeric()
      .withMessage("vestingStartTime must be a number"),
    body("vestingCliffTime")
      .isNumeric()
      .withMessage("vestingCliffTime must be a number"),
    body("vestingPeriod")
      .isNumeric()
      .withMessage("vestingPeriod must be a number"),
    body("enableByEther")
      .isNumeric()
      .withMessage("enableByEther must be a number"),
    body("enableByUsdt")
      .isNumeric()
      .withMessage("enableByUsdt must be a number"),
    body("owner").notEmpty().withMessage("owner is required"),
    body("project_burn_address")
      .notEmpty()
      .withMessage("project_burn_address is required"),
    body("project_coingecko_tokenID")
      .notEmpty()
      .withMessage("project_coingecko_tokenID is required"),
    body("project_coin_stats_url")
      .notEmpty()
      .withMessage("project_coin_stats_url is required"),
    body("project_image").notEmpty().withMessage("project_image is required"),
    body("project_linkedin_url")
      .notEmpty()
      .withMessage("project_linkedin_url is required"),
    body("project_name").notEmpty().withMessage("project_name is required"),
    body("project_description")
      .notEmpty()
      .withMessage("project_description is required"),
    body("project_total_user")
      .isNumeric()
      .withMessage("project_total_user must be a number"),
    body("project_swap_rate")
      .notEmpty()
      .withMessage("project_swap_rate is required"),
    body("project_token_symbol")
      .notEmpty()
      .withMessage("project_token_symbol is required"),
    body("project_hard_cap")
      .notEmpty()
      .withMessage("project_hard_cap is required"),
    body("project_total_fund_participated")
      .notEmpty()
      .withMessage("project_total_fund_participated is required"),
    body("project_fcfs_open_time")
      .isNumeric()
      .withMessage("project_fcfs_open_time must be a number"),
    body("soft_cap").notEmpty().withMessage("soft_cap is required"),
    body("audit_url").notEmpty().withMessage("audit_url is required"),
    body("whitelist").isBoolean().withMessage("whitelist must be a boolean"),
    body("tier").isBoolean().withMessage("tier must be a boolean"),
    body("minimumPayment").notEmpty().withMessage("minimumPayment is required"),
    body("maximumPayment").notEmpty().withMessage("maximumPayment is required"),
    body("referans_key").notEmpty().withMessage("referans_key is required"),
    body("wallet").notEmpty().withMessage("wallet is required"),
  ],
  validateRequest,
  async (req: any, res: any) => {
    try {
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

        twitter,
        telegram,
        website,
        whitepaper,
      } = req.body;

      const project = new Project({
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

        twitter,
        telegram,
        website,
        whitepaper,
      });

      await project.save();

      res.status(201).send("ok");
    } catch (error: any) {
      console.log(error);

      res.status(500).send({ error: error.message });
    }
  }
);

export { router as newProjectRouter };
