import express, { Request, Response } from "express";
import { body } from "express-validator";
import { User } from "../models/user";
import jwt from "jsonwebtoken";
import { validateRequest } from "../middlewares/validateRequest";
import * as bcrypt from "bcrypt";
import { BadRequestError } from "../errors/badRequestError";

//nats
import { natsWrapper } from "../nats-wrapper";
import generateToken from "../helpers/tokens";
import sendVerificationEmail from "../helpers/mailler";

const router = express.Router();

router.post(
  "/api/users/auth/login",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 characters"),
  ],

  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      throw new BadRequestError("User not found");
    }

    const check = await bcrypt.compare(password, existingUser.password);
    if (!check) {
      throw new BadRequestError("Invalid credentials.Please try again.");
    }

    //sendVerificationEmail(newUser.email, "user", url);
    // generate jwt token
    const userJswt = jwt.sign(
      {
        id: existingUser.id,
        email: existingUser.email,
        admin: existingUser.isAdmin,
      },
      "muzman"
    );

    //store it on session object
    res.cookie("jwt", userJswt);

    return res.status(200).send({
      user: {
        id: existingUser._id,
        email: existingUser.email,
        username: existingUser.username,
        surname: existingUser.surname,
        tier: existingUser.tier,
        verified: existingUser.verify,
      },
      token: userJswt,
      message: "Login Success !",
    });
  }
);

export { router as loginRouter };
