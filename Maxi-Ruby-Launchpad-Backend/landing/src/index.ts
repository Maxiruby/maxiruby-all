import express from "express";
import "express-async-errors";
import cookieSession from "cookie-session";
import { json } from "body-parser";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { randomBytes } from "crypto";
import cors from "cors";
import dotenv from "dotenv";

// import routers

import { errorHandler } from "./middlewares/errorHandler";
import { natsWrapper } from "./nats-wrapper";
import { landingsRouter } from "./routes/allProject";
import { getOneProject } from "./routes/getOneProject";
import { getTierListRouter } from "./routes/getTierList";
import { gettBlogsRouter } from "./routes/getBlog";
import { getOneBlogRouter } from "./routes/getOneBlog";
import { addProjectUser } from "./routes/addProject";
import { landingsRouterTest } from "./routes/testAll";
import { getOneProjecttest } from "./routes/gettest";
import { addProjectUsertest } from "./routes/addProjecttest";

const PORT = process.env.PORT || 3000;

// configuration

// dotenv'i configure
dotenv.config();

const app = express();
// CORS middleware
const corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: true,
    expires: new Date(Date.now() + 86400),
  })
);
app.use(cookieParser());

// routers users routes
app.use(landingsRouter);
app.use(getOneProject);
app.use(getTierListRouter);
app.use(addProjectUser);
app.use(getOneBlogRouter);
app.use(gettBlogsRouter);
app.use(landingsRouterTest)
app.use(getOneProjecttest)
app.use(addProjectUsertest)
// error handler
app.use(errorHandler);
app.all("*", async (req, res) => {
  return res.status(404).send({
    status: 404,
    error: "Not Found",
  });
});
//connect to database
const start = async () => {
  try {
    await mongoose.connect("mongodb://maxi-mongo-srv:27017/launch");
    console.log("Mongoose connection successful");
    await natsWrapper.connect(
      "maxi-backend",
      randomBytes(4).toString("hex"),
      "http://nats-srv:4222"
    );
    natsWrapper.client.on("close", () => {
      console.log("NATS connection closed!");
      process.exit();
    });

    process.on("SIGINT", () => natsWrapper.client.close());
    process.on("SIGTERM", () => natsWrapper.client.close());
  } catch (error) {
    console.log(error);
  }
};

// starst the server
app.listen(PORT, () => {
  console.log("Server is running on port PORT !!!!!!!!!");
});

start();
