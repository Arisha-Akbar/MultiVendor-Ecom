import express from "express";
import { Router } from "express";

import cloudinary from "cloudinary";
import ErrorHandler from "../utils/ErrorHandler.js";
import User from "../model/user.model.js";
const router = Router();

router.post("/create-user", async (req, res, next) => {
  const { name, email, password } = req.body;
  const userEmail = await user.findOne({ email });
  if (userEmail) {
    return next(new ErrorHandler("User already exists with this email", 400));
  }

  const myCloud = await cloudinary.v2.uploader.upload(avatar, {
    folder: "avatars",
  });
  const user = {
    name: name,
    email: email,
    password: password,
    avatar: {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    },
  };
});

export default router;
