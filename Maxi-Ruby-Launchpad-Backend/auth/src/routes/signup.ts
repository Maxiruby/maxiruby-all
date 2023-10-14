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
import { Holder } from "../models/holder";

const router = express.Router();

router.post(
  "/api/users/auth/register",
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
    const tiers = [
      {
        name: "Bronze",
        minQuantity: 750,
        weight: 3.2,
      },
      {
        name: "Silver",
        minQuantity: 3000,
        weight: 7,
      },
      {
        name: "Gold",
        minQuantity: 10000,
        weight: 40,
      },
      {
        name: "Platinum",
        minQuantity: 37500,
        weight: 95,
      },
      {
        name: "Diamond",
        minQuantity: 85000,
        weight: 465.5,
      },
    ];

    console.log("email", email);

    const existingUser = await User.findOne({ email });
    console.log(existingUser);

    if (existingUser) {
      throw new BadRequestError("Email  in use");
    }
    console.log("gecti 1");

    const cryptedPassword = await bcrypt.hash(password, 12);

    console.log("gecti 2");

    const newUser = User.build({
      email: email,
      password: cryptedPassword,
    });
    console.log("gecti 3");

    await newUser.save();
    console.log("gecti 4");

    const emailVerificationToken = generateToken(
      { id: newUser._id.toString() },
      "30m"
    );
    const url = `https://maxiruby.com/activate/${emailVerificationToken}`;

    await sendVerificationEmail(newUser.email, email, url);
    // generate jwt token
    const userJswt = jwt.sign(
      {
        id: newUser.id,
        email: newUser.email,
        admin: newUser.isAdmin,
      },
      "muzman"
    );

    //store it on session object
    res.cookie("jwt", userJswt);

    return res.status(201).send({
      user: {
        id: newUser._id,
        email: newUser.email,
        username: newUser.username,
        surname: newUser.surname,
        tier: newUser.tier,
        verified: newUser.verify,
      },
      message: "Register Success ! please activate your email to start",
      token: userJswt,
    });
  }
);

export { router as signupRouter };
