import express from "express";
import "express-async-errors";
import cookieSession from "cookie-session";
import { json,urlencoded } from "body-parser";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { randomBytes } from "crypto";
import cors from "cors";
import dotenv from "dotenv";
import { landingsRouter } from "./routes/landing";
// import routers

import { errorHandler } from "./middlewares/errorHandler";
import { natsWrapper } from "./nats-wrapper";
import { getAllUsersRouter } from "./routes/getUsers";
import { getAllHolderRouter } from "./routes/getHolderCount";
import { newKeydRouter } from "./routes/newKey";
import { getAllApplicationRouter } from "./routes/getApplication";
import { getOneApplicationRouter } from "./routes/getOneApplication";
import { getAcceptedRoutes } from "./routes/acceptCollection";
import { acceptRouteProjr } from "./routes/accProject";
import { pauseProject } from "./routes/pauseProject";
import { activeEtRouter } from "./routes/activEt";
import { addtierRouter } from "./routes/addTier";
import { getTiersRouter } from "./routes/getTiers";
import { removeTierRouter } from "./routes/removeTier";
import { updateProjectRouer } from "./routes/updateProject";
import { addBlogRouter } from "./routes/addBlog";
import { getOneBlogRouter } from "./routes/getOneBlog";
import { gettBlogsRouter } from "./routes/getBlog";
import { deleteProjectRouter } from "./routes/deleteReqProject";

const PORT = process.env.PORT || 3000;

// configuration

// dotenv'i configure
dotenv.config();

const app = express();
// CORS middleware
app.use(cors());
app.set("trust proxy", true);
app.use(json({ limit: '10mb' }));  // 10MB olarak sınırı artır
app.use(urlencoded({ limit: '10mb', extended: true }));
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
app.use(getAllUsersRouter);
app.use(getAllHolderRouter);
app.use(newKeydRouter);
app.use(getAllApplicationRouter);
app.use(getOneApplicationRouter);
app.use(getAcceptedRoutes);
app.use(acceptRouteProjr);
app.use(pauseProject);
app.use(activeEtRouter);
app.use(addtierRouter);
app.use(getTiersRouter);
app.use(removeTierRouter);
app.use(updateProjectRouer)
app.use(addBlogRouter)
app.use(getOneBlogRouter)
app.use(gettBlogsRouter)
app.use(deleteProjectRouter)
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
