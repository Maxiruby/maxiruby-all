import express from "express";

const router = express.Router();

router.post("/api/users/signout", (req: any, res: any) => {
  res.cookie("jwt", null);

  res.status(200).send({
    result: "You have been signed out",
  });
});

export { router as signoutRouter };
