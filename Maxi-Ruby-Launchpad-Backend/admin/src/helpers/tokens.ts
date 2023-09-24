import jwt from "jsonwebtoken";

const generateToken = (payload: any, expired: any) => {
  return jwt.sign(payload, process.env.TOKEN_SECRET || "muzman", {
    expiresIn: expired,
  });
};

export default generateToken;
