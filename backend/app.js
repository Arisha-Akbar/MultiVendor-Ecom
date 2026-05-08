import express from "express";
import { config } from "dotenv";
import ErrorHandler from "./utils/ErrorHandler.js";
const app = express();
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cookieParser());
app.use("/", express.static("uploads"));

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use("/test", (req, res) => {
  res.send("Hello world!");
});

//config
if (process.env.NODE_ENV !== "PRODUCTION") {
  config({
    path: "config/.env",
  });
}

//import routes
import userRouter from "./controller/user.controller.js";
app.use("/api/v1/user", userRouter);

//error handling
app.use(ErrorHandler);

export default app;
