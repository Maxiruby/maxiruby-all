import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/user";

interface UserPayload {
  id: string;
  address: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: any;
      jwt: string;
    }
  }
}

export const currentUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.cookies) {
    return next();
  }

  try {
    const payload = jwt.verify(req.cookies.jwt, "muzman") as UserPayload;
    const user = await User.findOne({ address: payload?.address });
    req.currentUser = user;
  } catch (err) {}

  next();
};
